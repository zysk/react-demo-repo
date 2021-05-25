AFRAME.registerComponent('hero', {
    init: function () {
        this.scene_cam = document.getElementById('head')
        this.glow = document.getElementById('glow')
        this.cover_bkg = document.getElementById('cover_bkg')
        this.sky = document.getElementById('sky')
        this.home = document.getElementById('home')
        this.clouds = document.getElementById('clouds')

        this.scope = this.createMeshModel('scope.gltf', 'scope')
        this.scope.setAttribute('id', 'scope')
        this.scope.setAttribute('position', '0 0 -0.015')
        this.scope.setAttribute('scale', '.9 .9 .9')
        this.scope.setAttribute('material', { shader: 'flat', color: '#f6caba' })

        this.hero_text = this.create('a-entity')
        this.hero_text.setAttribute('position', '0 0 0')
        this.hero_text.setAttribute('scale', '1 1 1')
        this.hero_text.setAttribute('visible', 'true')
        this.hero_text.setAttribute('material', 'shader: flat')

        this.hero_text.setAttribute('troika-text', {
            align: 'center',
            value: `WE ARE DESIGNERS OF VIRTURAL EXPERIENCES`,
            font: '../assets/font/Lato-Light.ttf',
            fontSize: 0.09,
            maxWidth: .99,
            color: 'black',
            letterSpacing: 0.04,
            lineHeight: 1.3
        })

        let instruction_text = 'use arrow keys to move \n click + drag to rotate'
        let isMobile = AFRAME.utils.device.isMobile() 

        if(isMobile){
            instruction_text = 'click + drag to rotate'
        }

        this.instruction = this.create('a-entity')
        this.instruction.setAttribute('position', '0 -0.5 0')
        this.instruction.setAttribute('scale', '1 1 1')
        this.instruction.setAttribute('id', 'instruction')
        this.instruction.classList.add('collidable') 

        this.instruction.setAttribute('troika-text', {
            align: 'center',
            value: instruction_text,
            font: '../assets/font/Lato-Bold.ttf',
            fontSize: 0.035,
            maxWidth: .99,
            color: '#0b357a',
            fillOpacity: 0,
            letterSpacing: 0.04,
            lineHeight: 1.3
        })

        this.enter_btn = this.create('a-entity')
        this.enter_btn.setAttribute('position', '0 -0.35 0')
        this.enter_btn.setAttribute('scale', '1 1 1')
        this.enter_btn.setAttribute('visible', 'true')
        this.enter_btn.setAttribute('id', 'enter_btn')
        this.enter_btn.classList.add('collidable') 

        this.enter_btn.setAttribute('troika-text', {
            align: 'center',
            value: `ENTER OUR VIRTUAL HOME`,
            font: '../assets/font/Lato-Bold.ttf',
            fontSize: 0.03,
            maxWidth: .99,
            color: '#0b357a',
            letterSpacing: 0.04,
            lineHeight: 1.3
        })

        this.enter_trigger = this.create('a-entity')
        this.enter_trigger.setAttribute('id', 'enter_trigger')
        this.enter_trigger.setAttribute('rotation', '0 0 0')
        this.enter_trigger.setAttribute('position', '0 0 0')
        this.enter_trigger.setAttribute('geometry', { primitive: 'plane', width: .5, height: .05 })
        this.enter_trigger.setAttribute('material', { color: 'red', shader: 'flat', transparent: false, opacity: 0.0 })
        this.enter_trigger.classList.add('collidable') 
        this.enter_btn.appendChild(this.enter_trigger)

        this.scope.appendChild(this.instruction)
        this.scope.appendChild(this.enter_btn)
        this.scope.appendChild(this.hero_text)

        let self = this
        this.enter_trigger.addEventListener('click', evt => {
            this.sky.setAttribute('visible', 'true')
            this.clouds.setAttribute('visible', 'true')

            let txt_fade_out = { property: 'troika-text.fillOpacity', to: '0', dur: 1000, loop: 'false', }
            
            this.hero_text.setAttribute('animation', txt_fade_out)
            this.enter_btn.setAttribute('animation', txt_fade_out)
            
            let txt_fade_in = { property: 'troika-text.fillOpacity', to: '1', dur: 1000, loop: 'false', }
            this.instruction.setAttribute('animation', txt_fade_in)
            let self = this
            setTimeout(function(){ 
                self.instruction.setAttribute('animation', txt_fade_out)
            }, 5000);

            this.enter_btn.classList.add('fadeout')
            setTimeout(function(){ 
                this.enter_btn.setAttribute('style', 'display: none')
            }, 700);

            let home_slide_in = "property: position; from: -0.1 .3 -5; to: -0.1 .3 -2.25; dur: 2800; loop: false; easing: linear; "
            let fade_in = { property: 'material.opacity', from: '0', to: '.5', dur: 5000, loop: 'false', }
            this.home.setAttribute('animation', fade_in)
            setTimeout(function(){ 
                this.home.setAttribute('animation', home_slide_in)
                this.home.setAttribute('material', {opacity: 0.5, depthTest: true, depthWrite: true})
            }, 1000);

            let fade_out = { property: 'material.opacity', to: '0', dur: 3000, loop: 'false', }
            this.cover_bkg.setAttribute('animation', fade_out)
            this.glow.setAttribute('animation', fade_out)

            this.glow.addEventListener('animationcomplete', function () {
                console.log('animation ended')
                self.cover_bkg.setAttribute('visible', false)
                self.glow.setAttribute('visible', false)
            });
            
            let scale_out = { property: 'scale', to: '4 4 4', dur: 2000, loop: 'false', }
            // this.scope.setAttribute('animation', scale_out)
            this.scene_cam.setAttribute('look-controls', "magicWindowTrackingEnabled: false")
        })

        this.hero_el = this.create('a-entity')
        this.hero_el.setAttribute('scale', '0.01 0.01 0.01')
        this.hero_el.setAttribute('position', '0 0 -0.01')
        this.hero_el.appendChild(this.scope)

        this.scene_cam.appendChild(this.hero_el)

    },

    update: function(){
  
    },
    create: function(el){
        return document.createElement(el)
    },

    createModel: function (name) {
        const model_src = `./assets/${name}`
        let model = document.createElement('a-entity')
        model.setAttribute('gltf-model', `url(${model_src})`)
        model.setAttribute('id', 'model')

        return model

    },

    createMeshModel: function (mesh_file, mesh_name) {
        let mesh_model = this.create('a-entity')
        mesh_model.setAttribute('id', 'mesh_model')

        const model_src = `./assets/${mesh_file}`
        
        let loader = new THREE.GLTFLoader()
        loader.load(model_src, function (gltfModel) {
            let model = gltfModel.scene || gltfModel.scenes[0]
            let part = model.getObjectByName(mesh_name)

            part.geometry = new THREE.Geometry().fromBufferGeometry(part.geometry);

            mesh_model.setObject3D('mesh', part)
        }, 
        function ( xhr) { 
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        }, 
        function (error ) {
            console.log( 'An error happened', error);
        })

        return mesh_model
    },
})