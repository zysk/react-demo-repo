AFRAME.registerComponent('orb', {
    
    init: async function () {
        this.scene_cam = document.getElementById('head')

        this.ground = this.create('a-entity')
        const geometry = new THREE.CircleGeometry( 9, 100 )
        const material = new THREE.MeshBasicMaterial( { color: new THREE.Color("rgb(193, 62, 0)") } );
        material.wireframe = true
        material.wireframeLinewidth = .1
        const mesh = new THREE.Mesh( geometry, material )
        this.ground.setAttribute('id', 'ground')
        this.ground.setAttribute('rotation', '-90 0 0')
        this.ground.setAttribute('position', '0 -1 -30')
        this.ground.setObject3D('mesh', mesh)

        this.cover_bkg = this.create('a-entity')
        this.cover_bkg.setAttribute('id', 'cover_bkg')
        this.cover_bkg.setAttribute('rotation', '0 0 0')
        this.cover_bkg.setAttribute('position', '0 1 -2.5')
        this.cover_bkg.setAttribute('geometry', { primitive: 'plane', width: 20, height: 20 })
        this.cover_bkg.setAttribute('material', { color: '#ced4da', shader: 'flat', transparent: false, opacity: 1.0 })


        this.clouds = this.createModel('clouds.glb')
        this.clouds.setAttribute('id', 'clouds')
        this.clouds.setAttribute('position', '0 5 0')
        this.clouds.setAttribute('scale', '.3 .3 .3')
        this.clouds.setAttribute('visible', false)

        let cloud_rotation = "property: rotation; from: 0 0 0; to: 0 350 0; dur: 500000; loop: true; easing: linear; direction: alternate; autoplay: true"
        this.clouds.setAttribute('animation__rotation', `${cloud_rotation}`)

        let glow_src = '../assets/glow.png'
        this.glow = this.create('a-entity')
        this.glow.setAttribute('id', 'glow')
        this.glow.setAttribute('rotation', '0 0 0')
        this.glow.setAttribute('position', '0 1 -1.5')
        this.glow.setAttribute('visible', false)
        this.glow.setAttribute('geometry', { primitive: 'plane', width: 2, height: 2 })
        this.glow.setAttribute('material', { src: glow_src, color: '#ffab8a', shader: 'flat', transparent: true, opacity: 1.0, alphaTest: 0.01 })
        
        setTimeout(function(){ 
            this.glow.setAttribute('visible', true)
        }, 1000);
        
        let pulse_1 = "property: material.opacity; from: 1.0; to: 0.2; dur: 2000; loop: true; dir: alternate; easing: linear;"
        this.glow.setAttribute('animation', pulse_1)
        
        let projects_btn_prop = { align: 'center', color: '#2971b6', value: 'VIEW\nPROJECTS', fontSize: 0.05, maxWidth: 1.6, letterSpacing: -0.01 }
        this.projects_btn = this.create('a-entity')
        this.projects_btn.setAttribute('troika-text', projects_btn_prop)
        this.projects_btn.setAttribute('position', '0 0 -0.01')


        this.home_orb = this.create('a-entity')
        this.home_orb.setAttribute('id', 'home_orb')
        this.home_orb.setAttribute('rotation', '0 0 0')
        this.home_orb.setAttribute('position', '0 .55 .35')
        this.home_orb.setAttribute('look-at', '[camera]')
        this.home_orb.setAttribute('geometry', { primitive: 'plane', width: .65, height: .65 })
        this.home_orb.setAttribute('material', { src: glow_src, color: 'white', shader: 'standard', transparent: true, opacity: 1.0, alphaTest: 0.1 })
        this.home_orb.classList.add('collidable') 
        this.home_orb.appendChild(this.projects_btn)

        let self = this
        this.home_orb.addEventListener('click', evt => {

            let fade_out = { property: 'material.opacity', from: '.5', to: '0', dur: 1000, loop: 'false', }
            this.home.setAttribute('animation__fade-out', fade_out)
            this.home_orb.setAttribute('animation__fade-out', fade_out)

            let ring_slide_in = "property: position; from: 0 1 -4; to: 0 1 -0.03; dur: 4800; loop: false; easing: easeInOutCirc; "
            this.rings_array.setAttribute('animation', ring_slide_in)

            let scale_out = { property: 'scale', to: '4 4 4', dur: 5000, loop: 'false', easing: 'easeInOutCirc'}
            this.scope = document.getElementById('scope')
            // this.scope.setAttribute('animation', scale_out)

            
           
            
            let clouds_scale_out = { property: 'scale', form: '.3 .3 .3' , to: '10 10 10', dur: 3000, loop: 'false'}
            this.clouds.setAttribute('animation__scale-out', clouds_scale_out)

            this.sky = document.getElementById('sky')
            let sky_btm_color_change = { property: 'material.bottomColor', to: '#5b5275', dur: 3500, loop: 'false'}
            let sky_top_color_change = { property: 'material.topColor', to: '#5582ec', dur: 3500, loop: 'false'}
            this.sky.setAttribute('animation__btm', sky_btm_color_change)
            this.sky.setAttribute('animation__top', sky_top_color_change)

            this.home.addEventListener('animationcomplete__fade-out', function () {
                // self.project_orbs.setAttribute('visible', true)
                self.cover_bkg.setAttribute('visible', false)
                self.home.setAttribute('scale', '0 0 0')
            })
        })
        
        let orb_pulse_1 = "property: material.opacity; from: 1.0; to: 0.135; dur: 2000; loop: true; dir: alternate; easing: easeInOutCirc;"
        this.home_orb.setAttribute('animation__1', orb_pulse_1)

        this.home = this.createModel('home_2.glb', 'home')
        this.home.setAttribute('id', 'home')
        this.home.setAttribute('rotation', '0 30 0')
        this.home.setAttribute('position', '-0.1 .3 -4')
        this.home.setAttribute('visible', 'true')
        this.home.setAttribute('material', { transparent: true, opacity: '0.01', blending: 'normal', emissive: '#e64c4c', shader: 'standard', color: '#eab49f' })

        this.home.appendChild(this.home_orb)


        this.el.appendChild(this.home)
        this.el.appendChild(this.clouds)
        this.el.appendChild(this.cover_bkg)
        this.el.appendChild(this.glow)

        this.rings_array = this.createMeshModel('rings.gltf', 'rings')
        this.rings_array.setAttribute('id', 'rings_array')
        this.rings_array.setAttribute('visible', 'true')
        this.rings_array.setAttribute('position', '0 -0.25 4.1')
        this.rings_array.setAttribute('scale', '.1 .1 .1')
        this.rings_array.setAttribute('rotation', '0 0 0')
        this.rings_array.setAttribute('material', {color: '#ffab8a', opacity: 1, depthWrite: false, depthTest:false})
        this.el.appendChild(this.rings_array)

        this.project_spheres = this.createProjects()
        this.project_spheres.setAttribute('position', '0 0 -1')

        this.rings_array.appendChild(this.project_spheres)
    },

    update: function () {
    },

    create: function(el){
        return document.createElement(el)
    },

    createProjects: function(){
        
        let projects_container = this.create('a-entity')
        projects_container.setAttribute('id', 'projects_container')

        this.projects_info.forEach( project => {
            let thumb_src = `../assets/${project.thumb}.png`
            let thumb = this.create('a-entity')
            thumb.setAttribute('id', `thumb_${project.id}`)
            thumb.setAttribute('position', '0 -0.001 -.029')
            thumb.setAttribute('scale', '0 0 0')
            thumb.setAttribute('geometry', {primitive: 'plane', width: .035, height: .035})
            thumb.setAttribute('material', { src: thumb_src, shader: 'flat', transparent: false, opacity: 0, alphaTest: 0.01 })
            thumb.setAttribute('look-at', '[camera]')
            thumb.classList.add('collidable') 

            let thumb_fade_in = { property: 'material.opacity', from: '0', to: '1', dur: 900, loop: 'false', startEvents: 'thumb_fade_in' }
            let thumb_fade_out = { property: 'material.opacity', from: '1', to: '0', dur: 900, loop: 'false', startEvents: 'thumb_fade_out' }
            thumb.setAttribute('animation__fadeout', thumb_fade_in)
            thumb.setAttribute('animation__fadein', thumb_fade_out)

            let thumb_icon_src = `../assets/${project.thumb_icon}.png`
            let thumb_icon = this.create('a-entity')
            thumb_icon.setAttribute('id', `thumb_icon_${project.id}`)
            thumb_icon.setAttribute('position', '0 0 0')
            thumb_icon.setAttribute('geometry', {primitive: 'plane', width: .3, height: .3})
            thumb_icon.setAttribute('material', { src: thumb_icon_src, shader: 'flat', transparent: false, opacity: .8, alphaTest: 0.01 })
            thumb_icon.setAttribute('look-at', '[camera]')

            let thumb_icon_fade_in = { property: 'material.opacity', from: '0', to: '.8', dur: 600, loop: 'false', startEvents: 'thumb_icon_fade_in' }
            let thumb_icon_fade_out = { property: 'material.opacity', from: '.8', to: '0', dur: 600, loop: 'false', startEvents: 'thumb_icon_fade_out' }
            thumb_icon.setAttribute('animation__fadeout', thumb_icon_fade_in)
            thumb_icon.setAttribute('animation__fadein', thumb_icon_fade_out)

            let project_txt = this.create('a-entity')
            project_txt.setAttribute('position', `0 ${-.12 - (project.radius / 2)} 0`)
            project_txt.setAttribute('scale', '.85 .85 .85')
            project_txt.setAttribute('visible', 'false')

            let max_width
            
            if(project.text.title.length > 10){
                max_width = .5
            } else {
                max_width = 1
            }
            
            project_txt.setAttribute('troika-text', {
                align: 'center',
                value: `${project.text.title}`,
                font: '../assets/font/Lato-Bold.ttf',
                fontSize: 0.07,
                maxWidth: max_width,
                color: '#e85f4a',
                letterSpacing: 0.04,
                lineHeight: .95
            })
            
            let sphere = this.create('a-entity')
            sphere.appendChild(project_txt)
            // sphere.appendChild(thumb_icon)
            sphere.setAttribute('id', project.id)
            sphere.setAttribute('geometry', {primitive: 'sphere', radius: project.radius, segmentsWidth: 36, segmentsHeight: 36})
            sphere.setAttribute('material', {color: project.color, side: 'double', opacity: 1, depthWrite: false, depthTest:false})
           
            let isMobile = AFRAME.utils.device.isMobile() 

            // if(isMobile){
            //     sphere.setAttribute('glow', {scale: 1.5, color: '#802000', c: '2', p: '1.1'})
            // } else {
            //     sphere.setAttribute('glow', {scale: 1.5, color: '#802000', c: '0.9', p: '1.1'})
            // }

            sphere.setAttribute('scale', project.scale)
            sphere.setAttribute('position', project.position)
            sphere.classList.add('collidable') 
            // let scale_up_anim = { property: 'position', from: project.position, to: '0 0 10', dur: 700, loop: 'false', startEvents: 'scaleup_sphere'}
            // let scale_down_anim = { property: 'position', from: '0 0 1', to: project.position, dur: 700, loop: 'false', startEvents: 'scaledown_sphere'}
            let scale_up_anim = { property: 'scale', from: '1 1 1', to: '200 200 200', dur: 200, loop: 'false', startEvents: 'scaleup_sphere'}
            let scale_down_anim = { property: 'scale', from: '200 200 200', to: '1 1 1', dur: 200, loop: 'false', startEvents: 'scaledown_sphere'}
            sphere.setAttribute('animation__scaleup', scale_up_anim)
            sphere.setAttribute('animation__scaledown', scale_down_anim)

            sphere.addEventListener('mouseenter', evt => {

                project_txt.setAttribute('visible', 'true')

            })
            sphere.addEventListener('mouseleave', evt => {

                project_txt.setAttribute('visible', 'false')

            })

            let self = this

            sphere.scaled = false
            sphere.addEventListener('click', evt => {
                if(!sphere.scaled){
 
                    let to_pos = self.scene_cam.getAttribute('position')

                    let to_txt = `${to_pos.x} ${0} ${to_pos.z + .85}` + ''
                    
                    let scale_up_anim = { property: 'position', from: project.position, to: to_txt, dur: 700, loop: 'false', startEvents: 'scaleup_sphere'}
                    sphere.emit('scaleup_sphere', {})

                    sphere.scaled = true
                    
                    thumb.emit('thumb_fade_in', {})
                    thumb.setAttribute('scale', '1 1 1')

                    thumb_icon.emit('thumb_icon_fade_out', {})
                    this.scene_cam.setAttribute('look-controls', {enabled: false})
                    this.scene_cam.setAttribute('wasd-controls', {enabled: false})
                } else {
                }

            })

        
            let project_info = this.createProjectInfo(project, sphere, thumb, thumb_icon)

            thumb.appendChild(project_info)
            this.scene_cam.appendChild(thumb)

            projects_container.appendChild(sphere)
        })

        return projects_container
    },

    createProjectInfo: function (info, sphere, thumb, thumb_icon) {
        let z_pos = 0.009
        let title_font_size = 0.009
        if(info.id === 6){
            z_pos = 0.01
            title_font_size = 0.006
        }
        let info_container = this.create('a-entity')
        info_container.setAttribute('id', 'info_container')
        info_container.setAttribute('scale', '.16 .16 .16')
        info_container.setAttribute('position', '0 0.013 0.001')

        let head_text = this.create('a-entity')
        head_text.setAttribute('position', `0 ${z_pos} 0`)
        head_text.setAttribute('scale', '.85 .85 .85')
        
        head_text.setAttribute('troika-text', {
            align: 'center',
            value: `VIRTUAL EXPERIENCE 00${info.id}`,
            font: '../assets/font/Lato-Bold.ttf',
            fontSize: 0.004,
            maxWidth: 2,
            color: '#e85f4a',
            letterSpacing: 0.08,
            lineHeight: 1.5
        })
        
        let title_text = this.create('a-entity')
        title_text.setAttribute('position', '0 0 0')

        title_text.setAttribute('troika-text', {
            align: 'center',
            value: `${info.text.title}`,
            font: '../assets/font/Lato-Bold.ttf',
            fontSize: title_font_size,
            maxWidth: .08,
            color: '#023188',
            letterSpacing: 0.09,
            lineHeight: 1
        })
        
        let tag_text = this.create('a-entity')
        tag_text.setAttribute('position', `0 -${z_pos} 0`)
        tag_text.setAttribute('troika-text', {
            align: 'center',
            value: `${info.text.tag}`,
            font: '../assets/font/Lato-Light.ttf',
            fontSize: 0.004,
            maxWidth: 2,
            color: '#023188',
            letterSpacing: 0.3,
            lineHeight: 1.5
        })

        info_container.appendChild(head_text)
        info_container.appendChild(title_text)
        info_container.appendChild(tag_text)

        let btn_container = this.create('a-entity')
        btn_container.setAttribute('position', '0 -0.14 0.001')
        info_container.appendChild(btn_container)

        btn_container.setAttribute('layout', { type: 'box', columns: 2, margin: .025, align: 'center' }) 

        let enter_btn = this.create('a-circle')
        enter_btn.setAttribute('radius', .01)
        enter_btn.setAttribute('material', 'color: #e85f4a; shader: flat')
        enter_btn.classList.add('collidable') 

        let enter_text = this.create('a-entity')
        enter_text.setAttribute('troika-text', {
            align: 'center',
            value: 'ENTER',
            fontSize: 0.004,
            font: '../assets/font/Lato-Regular.ttf',
            maxWidth: 2,
            color: '#ffff',
            letterSpacing: -0.01
        })
        enter_text.setAttribute('position', '0 0 0.001')

        enter_btn.appendChild(enter_text)

        enter_btn.addEventListener('click', evt => {
            window.open( info.link, "_blank")
        })

        btn_container.appendChild(enter_btn)

        let close_btn = this.create('a-circle')
        close_btn.setAttribute('radius', .01)
        close_btn.setAttribute('material', 'color: #e85f4a; shader: flat')
        close_btn.classList.add('collidable') 

        let close_text = this.create('a-entity')
        close_text.setAttribute('troika-text', {
            align: 'center',
            value: 'CLOSE',
            fontSize: 0.004,
            font: '../assets/font/Lato-Regular.ttf',
            maxWidth: 2,
            color: '#ffff',
            letterSpacing: -0.01
        })
        close_text.setAttribute('position', '0 0 0.001')
        close_btn.appendChild(close_text)

        close_btn.addEventListener('click', evt => {
            if(!sphere.scaled){
            } else {
                console.log('btn')
                let from_pos = this.scene_cam.getAttribute('position')

                // sphere.setAttribute('animation__scaledown', {
                //     from: `${from_pos.x} ${0} ${from_pos.z + .85}`
                // })

                sphere.emit('scaledown_sphere', {})
                // sphere.setAttribute('glow', {enabled: true})

                thumb.emit('thumb_fade_out', {})
                thumb.setAttribute('scale', '0 0 0')

                thumb_icon.emit('thumb_icon_fade_in', {})

                let isMobile = AFRAME.utils.device.isMobile() 

                this.scene_cam.setAttribute('look-controls', {enabled: true})
                this.scene_cam.setAttribute('wasd-controls', {enabled: true})
                sphere.scaled = false
            }
        })
        btn_container.appendChild(close_btn)


        return info_container
    },

    createOrbs: function() {
        let container = this.create('a-entity')

        let numProjects = 10
        for (let i = 0; i < numProjects; i += 1) {
            let geometry = this.create('a-entity')
            geometry.setAttribute('geometry', 'primitive: sphere; thetaLength: 180; radius: .3')
            geometry.setAttribute('material', 'side: double')
            let rot_x = Math.round(Math.random() * 180) - 80
            let rot_y = Math.round(Math.random() * 180) - 80
            let rot_z = Math.round(Math.random() * 180) - 80
            geometry.setAttribute('rotation', `${rot_x} ${rot_y} ${rot_z}`)
            geometry.classList.add('collidable') 
            let geo_clicked = false

            geometry.addEventListener('click', evt => {
                let animation = {
                    property: 'position',
                    to: '0 -1 5',
                    dur: 1000,
                    loop: 'false',
                }
                geometry.setAttribute('animation', animation)
            })
            container.appendChild(geometry)
        }

        return container
    },

    random: function (x) {
        return parseFloat('0.' + Math.sin(1 * 9999 * x).toString().substr(7));
    },

    createModel: function (name) {
        const model_src = `./assets/${name}`
        let model = document.createElement('a-entity')
        model.setAttribute('gltf-model', `url(${model_src})`)

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

            part.geometry = new THREE.Geometry().fromBufferGeometry(part.geometry)

            mesh_model.setObject3D('mesh', part)
        }, 
        function ( xhr) { 
            // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' )
        }, 
        function (error ) {
            console.log( 'An error happened', error)
        })

        return mesh_model
    },

    createRings: function (radius, color, lineWidth){
        
        let rings = this.create('a-entity')
        let  points = [];
          
        // 360 full circle will be drawn clockwise
        for(let i = 0; i <= 360; i++){
            points.push(Math.sin(i*(Math.PI/180))*radius, Math.cos(i*(Math.PI/180))*radius, 0);
        }
          
        const geometry = new THREE.Geometry().setFromPoints( points );

        let  material = new THREE.LineBasicMaterial({
            color: color,
            linewidth: lineWidth
        });
          
        const line = new THREE.Line( geometry, material );
        console.log(line)
        // let line = new THREE.Line2( geometry, material );
        //line.computeLineDistances();

        rings.object3D.add(line);


        return rings
    },

    createLoops: function () {
        let rings_el = this.create('a-entity')

        let radius = .05
        let i;
        let lineMesh;
        let loopShape;
        let material;
        let scale;
        let geometry

        // Create ring geometries.
        loopShape = new THREE.Shape();
        loopShape.absarc(0, 0, radius, 0, Math.PI * 2, false);
        geometry = loopShape.createPointsGeometry(512 / 2);
        geometry.dynamic = true;

        // Create container object.
        rings_el.setObject3D('waveformContainer', new THREE.Object3D());

        // Create rings.
        scale = 10;
        pos_z = 0
        for (i = 0; i < 60; i++) {
            material = new THREE.LineBasicMaterial({
                color: new THREE.Color( "#a9c2d7" ),
                linewidth: 20,
                opacity: 1,
                // blending: THREE.AdditiveBlending,
                depthTest: true,
                transparent: true
            });
            lineMesh = new THREE.Line(geometry, material);

            pos_z +=.25
            // scale += 1;
            // scale *= 1.05;
            lineMesh.scale.x = scale;
            lineMesh.scale.y = scale;
            lineMesh.position.z = pos_z
            rings_el.getObject3D('waveformContainer').add(lineMesh);

            // this.rings.push(lineMesh);
            // this.levels.push(0);
            // this.colors.push(0);
        }

        return rings_el
    },

    projects_info: [
        {
            id: 1,
            thumb: 'Project_1',
            thumb_icon: 'Project_1_icon',
            radius: '0.1',
            position: "-0.42067 0.14145 -0.01869",
            scale: '1 1 1',
            text: {
                title: 'drawing gallery',
                tag: 'ANIMATION'
            },
            link: 'https://invi.us/works/drawing-gallery'
        },
        {
            id: 2,
            thumb: 'Project_2',
            thumb_icon: 'Project_2_icon',
            radius: '0.12',
            position: "-0.17309 0.40744 -0.51536",
            scale: '1 1 1',
            text: {
                title: '#artforjustice',
                tag: '360 VIRTUAL TOUR'
            },
            link: 'https://invi.us/works/artForJustice'
        },
        {
            id: 3,
            thumb: 'Project_3',
            thumb_icon: 'Project_3_icon',
            radius: '0.1',
            position: "0.46841 0.14451 -0.78035",
            scale: '1 1 1',
            text: {
                title: 'graffiti city park',
                tag: '360 VIRTUAL WORLD'
            },
            link: 'https://invi.us/works/graffiti-city-park'
        },
        {
            id: 4,
            thumb: 'Project_4',
            thumb_icon: 'Project_4_icon',
            radius: '0.15',
            position: "0.30058 0.4415 -0.30369",
            scale: '1 1 1',
            text: {
                title: 'le petit trianon',
                tag: 'ANIMATION'
            },
            link: 'https://invi.us/works/lepetit-trianon'
        },
        {
            id: 5,
            thumb: 'Project_5',
            thumb_icon: 'Project_5_icon',
            radius: '0.1',
            position: "0.47043 -0.15325 -0.30751",
            scale: '1 1 1',
            text: {
                title: 'granada theater',
                tag: '360 ANIMATION'
            },
            link: 'https://invi.us/works/granada-theatre'
        },
        {
            id: 6,
            thumb: 'Project_6',
            thumb_icon: 'Project_6_icon',
            radius: '0.1',
            position: "-0.37392 -0.21076 -0.46657",
            scale: '1 1 1',
            text: {
                title: 'southern plains museum',
                // title: 'southern plains museum & cultural center',
                tag: '360 ANIMATION'
            },
            link: 'https://invi.us/works/southern-plains-museum'
        },
        {
            id: 7,
            thumb: 'Project_7',
            thumb_icon: 'Project_7_icon',
            radius: '0.15',
            position: "0.02431 -0.45392 -0.34989",
            scale: '1 1 1',
            text: {
                title: 'archvilla',
                tag: '360 VIRTUAL WORLD'
            },
            link: 'https://invi.us/works/archvilla'
        },
    ]
})

AFRAME.registerShader('gradientshader', {
    schema: {
      topColor: {type: 'color', default: '1 0 0', is: 'uniform'},
      bottomColor: {type: 'color', default: '0 0 1', is: 'uniform'}
    },
  
    vertexShader: [
      'varying vec3 vWorldPosition;',
      'void main() {',
      ' vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',
      ' vWorldPosition = worldPosition.xyz;',
      ' gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );',
      '}'
    ].join('\n'),
  
    fragmentShader: [
      'uniform vec3 bottomColor;',
      'uniform vec3 topColor;',
      'uniform float offset;',
      'varying vec3 vWorldPosition;',
      'void main() {',
      ' float h = normalize( vWorldPosition ).y;',
      ' gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max(h, 0.0 ), 0.8 ), 0.0 ) ), 1.0 );',
      '}'
    ].join('\n')
})