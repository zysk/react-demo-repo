AFRAME.registerComponent("orb", {
  init: async function () {
    this.back_light = this.create("a-light")
    this.back_light.setAttribute("position", "0 0 -15")

    let hemi_attr = {
      color: "#8f3e00",
      groundColor: "#f37777",
      type: "hemisphere",
      intensity: 3.5,
    }

    this.hemi_light = this.create("a-entity")
    this.hemi_light.setAttribute("light", hemi_attr)
    this.hemi_light.setAttribute("position", "0 0 5")

    let inner_orb_attr = {
      geometry: {
        primitive: "sphere",
        // primitive: 'icosahedron',
        // primitive: 'dodecahedron',
        detail: 3,
        radius: 4.8,
        segmentsHeight: 16,
        segmentsWidth: 16,
        thetaLength: 140,
      },
      material: {
        opacity: 1,
        side: "double",
        wireframe: false,
      },
    }

    this.inner_orb = this.create("a-entity")
    this.inner_orb.setAttribute("geometry", inner_orb_attr.geometry)
    this.inner_orb.setAttribute("material", inner_orb_attr.material)
    this.inner_orb.setAttribute("position", "0 1 -10")
    this.inner_orb.setAttribute("rotation", "0  0 180")
    this.inner_orb.setAttribute("class", "collidable")

    let main_sphere_attr = {
      geometry: {
        primitive: "sphere",
        radius: 15,
        segmentsHeight: 48,
        segmentsWidth: 48,
        thetaLength: 140,
      },
      material: {
        opacity: 1,
        side: "double",
        color: "grey",
        wireframe: false,
      },
    }

    this.main_sphere = this.create("a-entity")
    this.main_sphere.id = "main_sphere"
    this.main_sphere.setAttribute("geometry", main_sphere_attr.geometry)
    this.main_sphere.setAttribute("material", main_sphere_attr.material)
    this.main_sphere.setAttribute("rotation", "0 1 180")
    this.main_sphere.setAttribute("position", "0 1 -30")
    this.main_sphere.setAttribute("class", "collidable")

    let animation = {
      property: "material.color",
      from: "white",
      to: "yellow",
      dur: 5000,
      loop: "true",
      dir: "alternate",
    }
    // this.main_sphere.setAttribute('animation', animation)

    this.main_sphere.addEventListener("scroll", event => {
      console.log(event)
    })

    let main_sphere_attr_2 = {
      geometry: {
        primitive: "sphere",
        radius: 6,
        segmentsHeight: 48,
        segmentsWidth: 48,
      },
      material: {
        opacity: 0.1,
        side: "back",
        color: "grey",
      },
    }

    this.ground = this.create("a-entity")
    const geometry = new THREE.CircleGeometry(9, 100)
    // const wireframe = new THREE.WireframeGeometry( geometry );

    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color("rgb(193, 62, 0)"),
    })
    material.wireframe = true
    material.wireframeLinewidth = 0.1
    const mesh = new THREE.Mesh(geometry, material)
    this.ground.setAttribute("rotation", "-90 0 0")
    this.ground.setAttribute("position", "0 -1 -30")
    this.ground.setObject3D("mesh", mesh)

    this.project_orbs = this.create("a-entity")
    this.project_orbs.setAttribute("layout", "type: circle; radius: 12")
    this.createOrbs()
    // this.project_orbs.setAttribute('material', main_sphere_attr_2.material)
    this.project_orbs.setAttribute("rotation", "90 0 0")
    this.project_orbs.setAttribute("position", "0 6 -30")

    // this.el.appendChild(this.inner_orb)
    this.el.appendChild(this.ground)
    this.el.appendChild(this.hemi_light)
    // this.el.appendChild(this.back_light)
    this.el.appendChild(this.main_sphere)
    this.el.appendChild(this.project_orbs)
  },

  create: function (el) {
    return document.createElement(el)
  },

  createOrbs: function () {
    let numProjects = 10

    for (let i = 0; i < numProjects; i += 1) {
      let geometry = this.create("a-entity")
      geometry.setAttribute(
        "geometry",
        "primitive: sphere; thetaLength: 180; radius: 1.5"
      )
      geometry.setAttribute("material", "side: double")
      let rot_x = Math.round(Math.random() * 180) - 80
      let rot_y = Math.round(Math.random() * 180) - 80
      let rot_z = Math.round(Math.random() * 180) - 80
      geometry.setAttribute("rotation", `${rot_x} ${rot_y} ${rot_z}`)
      geometry.classList.add("collidable")
      let geo_clicked = false

      geometry.addEventListener("click", evt => {
        // let to = ''
        // if(!geo_clicked){
        //     this.curr_pos = geometry.getAttribute('position')
        //     to = '0 -.3 1'
        //     geo_clicked = true
        // } else {
        //     to = `${this.curr_pos.x} ${this.curr_pos.y} ${this.curr_pos.z}`
        //     geo_clicked = false
        // }

        // console.log('to', to)
        let animation = {
          property: "position",
          to: "0 -1 5",
          dur: 1000,
          loop: "false",
        }
        geometry.setAttribute("animation", animation)
      })
      this.project_orbs.appendChild(geometry)
    }
  },

  random: function (x) {
    return parseFloat(
      "0." +
        Math.sin(1 * 9999 * x)
          .toString()
          .substr(7)
    )
  },

  createPianoModel: function () {
    const model_src = "./assets/Piano_3D.glb"
    let model = document.createElement("a-entity")
    model.setAttribute("gltf-model", `url(${model_src})`)
    model.setAttribute("id", "piano_model")

    return model
  },
})

AFRAME.registerComponent("stars", {
  init: function () {
    this.STAGE_SIZE = 100

    this.stars = document.createElement("a-entity")
    this.stars.id = "stars"
    this.createStars()

    this.stars_container = document.createElement("a-entity")
    this.stars_container.appendChild(this.stars)
    let animation = {
      property: "rotation",
      from: "0 0 0",
      to: "0 360 0",
      dur: 300000,
      loop: "true",
      dir: "alternate",
    }
    this.stars_container.setAttribute("animation", animation)

    this.el.appendChild(this.stars_container)
  },

  createStars: function () {
    let numStars = 4000
    let geometry = new THREE.BufferGeometry()
    let positions = new Float32Array(numStars * 3)
    let radius = this.STAGE_SIZE - 1
    let v = new THREE.Vector3()

    for (let i = 0; i < positions.length; i += 3) {
      v.set(
        this.random(i + 23) - 0.5,
        this.random(i + 24),
        this.random(i + 25) - 0.5
      )
      v.normalize()
      v.multiplyScalar(radius)

      let up_down = i % 2 === 0 ? -1 : 1
      positions[i] = v.x
      positions[i + 1] = v.y * up_down
      positions[i + 2] = v.z
    }

    geometry.addAttribute("position", new THREE.BufferAttribute(positions, 3))
    let material = new THREE.PointsMaterial({
      size: 0.01,
      color: 0xcccccc,
      fog: false,
    })

    this.stars.setObject3D("mesh", new THREE.Points(geometry, material))
  },

  random: function (x) {
    return parseFloat(
      "0." +
        Math.sin(1 * 9999 * x)
          .toString()
          .substr(7)
    )
  },
})

AFRAME.registerComponent("hero", {
  init: function () {
    this.scene_cam = document.getElementById("head")

    let hero_enter_prop = {
      align: "center",
      value: "enter",
      fontSize: 0.07,
      maxWidth: 1.6,
      letterSpacing: -0.01,
    }

    this.hero_enter = this.create("a-entity")
    this.hero_enter.setAttribute("troika-text", hero_enter_prop)
    this.hero_enter.setAttribute("position", "0 -0.4 0")

    this.hero_enter_trigger = this.create("a-plane")
    this.hero_enter_trigger.setAttribute("geometry", "width:.3; height: .1")
    this.hero_enter_trigger.setAttribute("position", "0 0 -0.001")
    this.hero_enter_trigger.setAttribute("visible", "false")
    this.hero_enter_trigger.classList.add("collidable")

    this.hero_enter.appendChild(this.hero_enter_trigger)

    this.hero_enter.addEventListener("click", evt => {
      this.hero_text.setAttribute("visible", "false")
      this.hero_enter.setAttribute("visible", "false")
      let animation = {
        property: "position",
        to: "0 0 -29",
        dur: 3000,
        loop: "false",
      }
      this.scene_cam.setAttribute("animation", animation)
    })

    let hero_logo_prop = {
      align: "center",
      value: "invi",
      fontSize: 0.1,
      maxWidth: 1.6,
      letterSpacing: -0.01,
    }

    this.hero_logo = this.create("a-entity")
    this.hero_logo.setAttribute("troika-text", hero_logo_prop)
    this.hero_logo.setAttribute("position", "0 0.75 0")

    let hero_text_prop = {
      align: "center",
      value: "We are architects of the virtual world",
      fontSize: 0.18,
      maxWidth: 1.6,
      letterSpacing: -0.01,
    }

    this.hero_text = this.create("a-entity")
    this.hero_text.setAttribute("troika-text", hero_text_prop)
    this.hero_text.setAttribute("position", "0 0 0")

    let hero_bkg_prop = {
      geometry: {
        primitive: "plane",
        width: 5,
        height: 5,
      },
      material: {
        opacity: 0.2,
        side: "front",
        color: "black",
      },
      position: "0 0 -0.001",
    }

    this.hero_bkg = this.create("a-entity")
    this.hero_bkg.setAttribute("geometry", hero_bkg_prop.geometry)
    this.hero_bkg.setAttribute("material", hero_bkg_prop.material)
    this.hero_bkg.setAttribute("position", hero_bkg_prop.position)

    this.hero_el = this.create("a-entity")
    this.hero_el.setAttribute("scale", "0.01 0.01 0.01")
    this.hero_el.setAttribute("position", "0 0 -0.01")

    this.hero_el.appendChild(this.hero_enter)
    this.hero_el.appendChild(this.hero_logo)
    this.hero_el.appendChild(this.hero_text)
    this.hero_el.appendChild(this.hero_bkg)

    this.scene_cam.appendChild(this.hero_el)
  },

  create: function (el) {
    return document.createElement(el)
  },
})
