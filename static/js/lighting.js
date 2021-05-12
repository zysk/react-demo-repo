AFRAME.registerComponent('lighting', {
    init: function () {

        let directional_attr = {
            target: '#clouds',
            color: 'white',
            groundColor: '#000000',
            type: 'point',
            intensity: 0.35,
            angle: 90,
            decay:  0,
            distance:  30
        }

        this.dir_light = this.create('a-entity')
        this.dir_light.setAttribute('light', directional_attr)
        this.dir_light.setAttribute('position', '0 1 1')
        let hemi_attr = {
            target: '#clouds',
            color: '#fff',
            groundColor: '#000000',
            type: 'hemisphere',
            intensity: 0.5,
        }

        this.hemi_light = this.create('a-entity')
        this.hemi_light.setAttribute('light', hemi_attr)
        this.hemi_light.setAttribute('position', '-0.15 1.5 -5')

        this.el.appendChild(this.dir_light)
        this.el.appendChild(this.hemi_light)

        this.el.sceneEl.setAttribute('fog', 'density: 0.0; color: #eebefa; type: exponential')
    },

    create: function(el){
        return document.createElement(el)
    },
})