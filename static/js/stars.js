AFRAME.registerComponent('stars', {
    init: function(){
        this.STAGE_SIZE = 100

        this.stars = document.createElement('a-entity')
        this.stars.id= 'stars'
        this.createStars()
        
        this.stars_container = document.createElement('a-entity')
        this.stars_container.appendChild(this.stars)
        let animation = {
            property: 'rotation',
            from: '0 0 0',
            to: '0 360 0',
            dur: 300000,
            loop: 'true',
            dir: 'alternate',
        }
        this.stars_container.setAttribute('animation', animation)

        this.el.appendChild(this.stars_container)

    },

    createStars: function() {
        let numStars = 4000
        let geometry = new THREE.BufferGeometry()
        let positions = new Float32Array( numStars * 3 )
        let radius = this.STAGE_SIZE - 1
        let v = new THREE.Vector3()

        for (let i = 0; i < positions.length; i += 3) {
            v.set(this.random(i + 23) - 0.5, this.random(i + 24), this.random(i + 25) - 0.5)
            v.normalize()
            v.multiplyScalar(radius)

            let up_down = i % 2 === 0 ? -1 : 1
            positions[i  ] = v.x
            positions[i+1] = v.y * up_down
            positions[i+2] = v.z
        }

        geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3))
        let material = new THREE.PointsMaterial({size: 0.01, color: 0xCCCCCC, fog: false})

        this.stars.setObject3D('mesh', new THREE.Points(geometry, material))
    },

    random: function (x) {
        return parseFloat('0.' + Math.sin(1 * 9999 * x).toString().substr(7));
    },
})