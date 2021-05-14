AFRAME.registerComponent('hero', {
    init: function () {
        this.scene_cam = document.getElementById('head')
        this.glow = document.getElementById('glow')
        this.cover_bkg = document.getElementById('cover_bkg')
        this.sky = document.getElementById('sky')
        this.home = document.getElementById('home')
        this.clouds = document.getElementById('clouds')
        this.home_text = document.getElementById('home_text')
        this.instructions = document.getElementById('instructions')
        this.headline = document.getElementById('headline')
        this.enter_btn = document.getElementById('enter_btn')

        let self = this
        this.enter_btn.addEventListener('click', evt => {
            this.sky.setAttribute('visible', 'true')
            this.clouds.setAttribute('visible', 'true')

            this.headline.classList.add('fadeout')
            this.enter_btn.classList.add('fadeout')
            setTimeout(function(){ 
                this.headline.setAttribute('style', 'display: none')
                this.enter_btn.setAttribute('style', 'display: none')
            }, 700);

            this.home_text.classList.add('fadein')
            setTimeout(function(){ 
        		let isMobile = AFRAME.utils.device.isMobile() 

                if(!isMobile){
                    this.home_text.setAttribute('style', 'display: block')
                }
                
                this.instructions.setAttribute('style', 'display: none')
            }, 1000);

            let home_slide_in = "property: position; from: -0.1 .3 -5; to: -0.1 .3 -2.25; dur: 2800; loop: false; easing: linear; "
            let fade_in = { property: 'material.opacity', from: '0', to: '.5', dur: 5000, loop: 'false', }
            this.home.setAttribute('animation', fade_in)
            setTimeout(function(){ 
                this.home.setAttribute('animation', home_slide_in)
                this.home.setAttribute('material', {opacity: 0.5, depthTest: true, depthWrite: true})
            }, 1000);

            let opacity_fade_in = { property: 'material.opacity', to: '0.21', dur: 3000, loop: 'false', }
            // this.grain.setAttribute('animation', opacity_fade_in)

            // this.grain.addEventListener('animationcomplete', function () {
            //     self.glow.setAttribute('visible', true)
            // })


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

        this.scope = this.createMeshModel('scope.gltf', 'scope')
        this.scope.setAttribute('id', 'scope')
        this.scope.setAttribute('position', '0 0 -0.015')
        this.scope.setAttribute('material', {
            shader: 'flat',
            color: '#f6caba'
        })

        // let grain_src = '../assets/grainy.png'
        // this.grain = this.create('a-entity')
        // this.grain.setAttribute('id', 'grain')
        // this.grain.setAttribute('rotation', '0 0 0')
        // this.grain.setAttribute('position', '0 0 -.01')
        // this.grain.setAttribute('geometry', { primitive: 'plane', width: 2, height: 1.5 })
        // this.grain.setAttribute('material', { src: grain_src, color: 'white', shader: 'flat', transparent: true, opacity: 0, alphaTest: 0.01 })
        // this.glow.setAttribute('visible', false)
        // this.scope.appendChild(this.grain)

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