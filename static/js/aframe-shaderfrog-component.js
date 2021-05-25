(function () {
  'use strict';

  var id = 4429;
  var name = "Water Body";
  var fragment = "precision highp float;\nprecision highp int;\nuniform vec3 baseColor;\nuniform float brightness;\nuniform float scale;\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nfloat field(in vec3 p) \n{\nfloat strength = 7. + .03 * log(1.e-6 + fract(sin(time) * 4373.11));\nfloat accum = 0.;\nfloat prev = 0.;\nfloat tw = 0.;\nfor (int i = 0;\n i < 32; ++i) \n{\nfloat mag = dot(p, p);\np = abs(p) / mag + vec3(-.51, -.4, -1.3);\nfloat w = exp(-float(i) / 7.);\naccum += w * exp(-strength * pow(abs(mag - prev), 2.3));\ntw += w;\nprev = mag;\n}\nreturn max(0., 5. * accum / tw - .2);\n}\nvec3 nrand3(vec2 co) \n{\nvec3 a = fract(cos(co.x * 8.3e-2 + co.y) * vec3(1.3e5, 4.7e5, 2.9e5));\nvec3 b = fract(sin(co.x * 0.3e-3 + co.y) * vec3(8.1e5, 1.0e5, 0.1e5));\nvec3 c = mix(a, b, 0.5);\nreturn c;\n}\nvec4 Star1583104690644_197_main() \n{\nvec4 Star1583104690644_197_gl_FragColor = vec4(0.0);\nvec3 pos = vPosition / scale;\nvec3 p = vec3(pos / 4.) + vec3(2., -1.3, -1.);\np += 0.18 * vec3(sin(time / 16.), sin(time / 12.), sin(time / 128.));\nvec3 p2 = vec3(pos / (4. + sin(time * 0.11) * 0.2 + 0.2 + sin(time * 0.15) * 0.3 + 0.4)) + vec3(2., -1.3, -1.);\np2 += 0.2 * vec3(sin(time / 16.), sin(time / 12.), sin(time / 128.));\nvec3 p3 = vec3(pos / (4. + sin(time * 0.14) * 0.23 + 0.23 + sin(time * 0.19) * 0.31 + 0.31)) + vec3(2., -1.3, -1.);\np3 += 0.25 * vec3(sin(time / 16.), sin(time / 12.), sin(time / 128.));\nfloat t = field(p);\nfloat t2 = field(p2);\nfloat t3 = field(p3);\nfloat v = (1. - exp((abs(pos.x) - 1.) * 6.)) * (1. - exp((abs(pos.y) - 1.) * 6.)) * (1. - exp((abs(pos.z) - 1.) * 6.));\nvec3 c1 = mix(.9, 1., v) * vec3(1.8 * t * t * t, 1.4 * t * t, t);\nvec3 c2 = mix(.8, 1., v) * vec3(1.9 * t2 * t2 * t2, 1.8 * t2 * t2, t2);\nvec3 c3 = mix(.8, 1., v) * vec3(1.4 * t3 * t3 * t3, 1.8 * t3 * t3, t3);\nc1 *= baseColor;\nc2 *= baseColor;\nc3 *= baseColor;\nStar1583104690644_197_gl_FragColor = vec4(brightness * vec3(c1 * 0.1 + c2 * 0.9 + c3 * -0.5), 1.0);\nreturn Star1583104690644_197_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = Star1583104690644_197_main();}\n";
  var vertex = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvec4 Star1583104690644_197_main() \n{\nvec4 Star1583104690644_197_gl_Position = vec4(0.0);\nvUv = uv;\nvPosition = position;\nvNormal = normal;\nStar1583104690644_197_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Star1583104690644_197_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Star1583104690644_197_main();}\n";
  var uniforms = {
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	baseColor: {
  		value: {
  			r: 0.6941176470588235,
  			g: 0.12549019607843137,
  			b: 0.6745098039215687
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	brightness: {
  		value: "0.9",
  		type: "f",
  		glslType: "float"
  	},
  	scale: {
  		value: "1.05",
  		type: "f",
  		glslType: "float"
  	}
  };
  var url = "http://shaderfrog.com/app/view/4429";
  var user = {
  	username: "Vai",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Water_Body = {
  	id: id,
  	name: name,
  	fragment: fragment,
  	vertex: vertex,
  	uniforms: uniforms,
  	url: url,
  	user: user
  };

  var id$1 = 139;
  var name$1 = "Polkadot Shader";
  var fragment$1 = "// Gives us dFdx\n#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\nprecision highp int;\n\nuniform vec3 cameraPosition;\nuniform vec3 color1;\nuniform vec3 color2;\nuniform float frequency;\nuniform float radius;\n\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\n// Anti-alias step function\nfloat aastep(float threshold, float value) {\nfloat afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));\nreturn smoothstep(threshold - afwidth, threshold + afwidth, value);\n}\n \nvoid main() {\n// Rotate the UV coord by 45 degrees. See \n// https://en.wikipedia.org/wiki/Rotation_matrix#Common_rotations\nvec2 st2 = mat2( 0.5, -0.5, 0.5, 0.5 ) * vUv;\nvec2 nearest = 2.0 * fract( frequency * st2 ) - 1.0;\nfloat dist = length( nearest );\n\nvec3 fragcolor = mix( color1, color2, aastep( radius, dist ) );\ngl_FragColor = vec4( fragcolor, 1.0 );\n}";
  var vertex$1 = "/**\n* Example Vertex Shader\n* Sets the position of the vertex by setting gl_Position\n*/\n\n// Set the precision for data types used in this shader\nprecision highp float;\nprecision highp int;\n\n// Default THREE.js uniforms available to both fragment and vertex shader\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\n\n// Default uniforms provided by ShaderFrog.\nuniform vec3 cameraPosition;\nuniform float time;\n\n// Default attributes provided by THREE.js. Attributes are only available in the\n// vertex shader. You can pass them to the fragment shader using varyings\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n\n// Examples of variables passed from vertex to fragment shader\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec2 vUv2;\n\nvoid main() {\n\n// To pass variables to the fragment shader, you assign them here in the\n// main function. Traditionally you name the varying with vAttributeName\nvNormal = normal;\nvUv = uv;\nvUv2 = uv2;\nvPosition = position;\n\n// This sets the position of the vertex in 3d space. The correct math is\n// provided below to take into account camera and object data.\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}";
  var uniforms$1 = {
  	cameraPosition: {
  		name: "cameraPosition",
  		type: "v3",
  		glslType: "vec3",
  		description: ""
  	},
  	time: {
  		name: "time",
  		type: "f",
  		glslType: "float",
  		description: ""
  	},
  	color1: {
  		name: null,
  		type: "c",
  		glslType: "vec3",
  		value: {
  			r: 1,
  			g: 0.5411764705882353,
  			b: 0.7294117647058823
  		},
  		description: ""
  	},
  	color2: {
  		name: null,
  		type: "c",
  		glslType: "vec3",
  		value: {
  			r: 0,
  			g: 0,
  			b: 0
  		},
  		description: ""
  	},
  	frequency: {
  		name: null,
  		type: "f",
  		glslType: "float",
  		value: "10",
  		description: ""
  	},
  	radius: {
  		name: null,
  		type: "f",
  		glslType: "float",
  		value: "0.5",
  		description: ""
  	}
  };
  var url$1 = "http://shaderfrog.com/app/view/139";
  var user$1 = {
  	username: "andrewray",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Polkadot_Shader = {
  	id: id$1,
  	name: name$1,
  	fragment: fragment$1,
  	vertex: vertex$1,
  	uniforms: uniforms$1,
  	url: url$1,
  	user: user$1
  };

  var id$2 = 1068;
  var name$2 = "Sun Shader";
  var fragment$2 = "#define OCTAVES 2\n\n#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\nprecision highp int;\nuniform float time;\nuniform float brightness;\nuniform float sunSpots;\nuniform vec3 color;\nuniform vec2 speed;\nuniform vec2 resolution;\nvarying vec2 vUv;\nfloat rand(vec2 n) \n{\nreturn fract(sin(dot(n, vec2(13, 5))) * 43758.5453);\n}\nfloat noise(vec2 n) \n{\nconst vec2 d = vec2(0.0, 1.0);\nvec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\nreturn mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n}\nfloat fbm(vec2 n) \n{\nfloat total = 0.0;\nfloat amplitude = 2.0;\nfor (int i = 0;\n i < OCTAVES; i++) \n{\ntotal += noise(n) * amplitude;\nn += n;\namplitude *= 0.3;\n}\nreturn total;\n}\nvec3 tex(vec2 pos) \n{\nvec3 c1 = (1.0 - sunSpots) * vec3(3.1, 0.0, 0.0);\nvec3 c2 = vec3(c1);\nvec3 c3 = vec3(c1);\nvec3 c4 = vec3(3.0, 0.9, 0.0) * color;\nvec3 c5 = vec3(c3);\nvec3 c6 = vec3(c1);\nvec2 p = pos;\nfloat q = fbm(p + time * speed);\nvec2 r = vec2(fbm(p + q + (time * speed.x) - p.x - p.y), fbm(p + p + (time * speed.y)));\nvec3 c = color * (mix(c1, c2, fbm(p + r)) + mix(c3, c4, r.x) - mix(c5, c6, r.y));\nreturn c;\n}\nvec4 Surface_of_The_Sun1478777938883_101_main() \n{\nvec4 Surface_of_The_Sun1478777938883_101_gl_FragColor = vec4(0.0);\nvec2 p = (vUv - 0.5) * resolution;\nvec3 col = tex(p);\nSurface_of_The_Sun1478777938883_101_gl_FragColor = vec4(col * brightness, 1.0);\nreturn Surface_of_The_Sun1478777938883_101_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = (Surface_of_The_Sun1478777938883_101_main());}\n";
  var vertex$2 = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec2 vUv2;\nvec4 Surface_of_The_Sun1478777938883_101_main() \n{\nvec4 Surface_of_The_Sun1478777938883_101_gl_Position = vec4(0.0);\nvNormal = normal;\nvUv = uv;\nvUv2 = uv2;\nvPosition = position;\nSurface_of_The_Sun1478777938883_101_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Surface_of_The_Sun1478777938883_101_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Surface_of_The_Sun1478777938883_101_main();}\n";
  var uniforms$2 = {
  	cameraPosition: {
  		type: "v3",
  		glslType: "vec3"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	resolution: {
  		value: {
  			x: "100",
  			y: "100"
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	brightness: {
  		value: "0.52098325",
  		type: "f",
  		glslType: "float"
  	},
  	speed: {
  		value: {
  			x: 0.9230769230769231,
  			y: 0.9230769230769231
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	color: {
  		value: {
  			r: "1",
  			g: "1",
  			b: "1"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	sunSpots: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	}
  };
  var url$2 = "http://shaderfrog.com/app/view/1068";
  var user$2 = {
  	username: "entropy",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Sun_Shader = {
  	id: id$2,
  	name: name$2,
  	fragment: fragment$2,
  	vertex: vertex$2,
  	uniforms: uniforms$2,
  	url: url$2,
  	user: user$2
  };

  var id$3 = 2901;
  var name$3 = "Jelly Shader";
  var fragment$3 = "#define TAU 6.28318530718\n#define MAX_ITER 5\n#define tau 6.2831853\n\n#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\nprecision highp int;\nuniform vec2 Tiling_Caustic1477531952046_152_resolution;\nuniform vec3 backgroundColor;\nuniform vec3 Tiling_Caustic1477531952046_152_color;\nuniform float Tiling_Caustic1477531952046_152_speed;\nuniform float Tiling_Caustic1477531952046_152_brightness;\nuniform float time;\nuniform float contrast;\nuniform float distortion;\nuniform float Noise_Ripples1477531959288_166_speed;\nuniform vec3 Noise_Ripples1477531959288_166_color;\nuniform float Noise_Ripples1477531959288_166_brightness;\nuniform sampler2D noiseImage;\nuniform vec2 Noise_Ripples1477531959288_166_resolution;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\nuniform float highlightIntensity;\nuniform vec3 highlightColor;\nuniform vec3 Wiggly_Improved1477532051339_181_color;\nuniform vec3 Transparent_Glow1477532059126_201_color;\nuniform float Transparent_Glow1477532059126_201_start;\nuniform float Transparent_Glow1477532059126_201_end;\nuniform float Transparent_Glow1477532059126_201_alpha;\nuniform vec3 Glow_Effect1477532183055_216_color;\nuniform float Glow_Effect1477532183055_216_start;\nuniform float Glow_Effect1477532183055_216_end;\nuniform float Glow_Effect1477532183055_216_alpha;\nvarying vec2 Tiling_Caustic1477531952046_152_vUv;\nvarying vec2 Noise_Ripples1477531959288_166_vUv;\nmat2 makem2(in float theta) \n{\nfloat c = cos(theta);\nfloat s = sin(theta);\nreturn mat2(c, -s, s, c);\n}\nfloat noise(in vec2 x) \n{\nreturn texture2D(noiseImage, x * .01).x;\n}\nfloat fbm(in vec2 p) \n{\nfloat z = 2.;\nfloat rz = 0.;\nvec2 bp = p;\nfor (float i = 1.;\n i < 6.0; i++) \n{\nrz += abs((noise(p) - 0.5) * 2.0) / z;\nz = z * 2.;\np = p * 2.;\n}\nreturn rz;\n}\nfloat dualfbm(in vec2 p) \n{\nvec2 p2 = p * distortion;\nvec2 basis = vec2(fbm(p2 - time * Noise_Ripples1477531959288_166_speed * 1.6), fbm(p2 + time * Noise_Ripples1477531959288_166_speed * 1.7));\nbasis = (basis - .5) * .2;\np += basis;\nreturn fbm(p * makem2(time * Noise_Ripples1477531959288_166_speed * 0.2));\n}\nvarying vec3 Wiggly_Improved1477532051339_181_vNormal;\nvarying float light;\nvarying vec3 Transparent_Glow1477532059126_201_fPosition;\nvarying vec3 Transparent_Glow1477532059126_201_fNormal;\nvarying vec3 Glow_Effect1477532183055_216_fPosition;\nvarying vec3 Glow_Effect1477532183055_216_fNormal;\nvec4 Tiling_Caustic1477531952046_152_main() \n{\nvec4 Tiling_Caustic1477531952046_152_gl_FragColor = vec4(0.0);\nvec2 uv = Tiling_Caustic1477531952046_152_vUv * Tiling_Caustic1477531952046_152_resolution;\nvec2 p = mod(uv * TAU, TAU) - 250.0;\nvec2 i = vec2(p);\nfloat c = 1.0;\nfloat inten = 0.005;\nfor (int n = 0;\n n < MAX_ITER; n++) \n{\nfloat t = time * Tiling_Caustic1477531952046_152_speed * (1.0 - (3.5 / float(n + 1)));\ni = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));\nc += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));\n}\nc /= float(MAX_ITER);\nc = 1.17 - pow(c, Tiling_Caustic1477531952046_152_brightness);\nvec3 rgb = vec3(pow(abs(c), 8.0));\nTiling_Caustic1477531952046_152_gl_FragColor = vec4(rgb * Tiling_Caustic1477531952046_152_color + backgroundColor, 1.0);\nreturn Tiling_Caustic1477531952046_152_gl_FragColor *= 1.0;\n}\nvec4 Noise_Ripples1477531959288_166_main() \n{\nvec4 Noise_Ripples1477531959288_166_gl_FragColor = vec4(0.0);\nvec2 p = (Noise_Ripples1477531959288_166_vUv.xy - 0.5) * Noise_Ripples1477531959288_166_resolution;\nfloat rz = dualfbm(p);\nvec3 col = (Noise_Ripples1477531959288_166_color / rz) * Noise_Ripples1477531959288_166_brightness;\ncol = ((col - 0.5) * max(contrast, 0.0)) + 0.5;\nNoise_Ripples1477531959288_166_gl_FragColor = vec4(col, 1.0);\nreturn Noise_Ripples1477531959288_166_gl_FragColor *= 1.0;\n}\nvec4 Wiggly_Improved1477532051339_181_main() \n{\nvec4 Wiggly_Improved1477532051339_181_gl_FragColor = vec4(0.0);\nWiggly_Improved1477532051339_181_gl_FragColor = vec4(clamp(highlightColor * highlightIntensity * light, 0.0, 1.0), 1.0);\nreturn Wiggly_Improved1477532051339_181_gl_FragColor *= 1.0;\n}\nvec4 Transparent_Glow1477532059126_201_main() \n{\nvec4 Transparent_Glow1477532059126_201_gl_FragColor = vec4(0.0);\nvec3 normal = normalize(Transparent_Glow1477532059126_201_fNormal);\nvec3 eye = normalize(-Transparent_Glow1477532059126_201_fPosition.xyz);\nfloat rim = smoothstep(Transparent_Glow1477532059126_201_start, Transparent_Glow1477532059126_201_end, 1.0 - dot(normal, eye));\nfloat value = clamp(rim * Transparent_Glow1477532059126_201_alpha, 0.0, 1.0);\nTransparent_Glow1477532059126_201_gl_FragColor = vec4(Transparent_Glow1477532059126_201_color * value, value);\nreturn Transparent_Glow1477532059126_201_gl_FragColor *= 1.0;\n}\nvec4 Glow_Effect1477532183055_216_main() \n{\nvec4 Glow_Effect1477532183055_216_gl_FragColor = vec4(0.0);\nvec3 normal = normalize(Glow_Effect1477532183055_216_fNormal);\nvec3 eye = normalize(-Glow_Effect1477532183055_216_fPosition.xyz);\nfloat rim = smoothstep(Glow_Effect1477532183055_216_start, Glow_Effect1477532183055_216_end, 1.0 - dot(normal, eye));\nGlow_Effect1477532183055_216_gl_FragColor = vec4(clamp(rim, 0.0, 1.0) * Glow_Effect1477532183055_216_alpha * Glow_Effect1477532183055_216_color, 1.0);\nreturn Glow_Effect1477532183055_216_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = (Tiling_Caustic1477531952046_152_main() + Noise_Ripples1477531959288_166_main() + Wiggly_Improved1477532051339_181_main() + Transparent_Glow1477532059126_201_main() + Glow_Effect1477532183055_216_main());}\n";
  var vertex$3 = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nuniform float Wiggly_Improved1477532051339_181_speed;\nuniform float frequency;\nuniform float amplitude;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec3 Tiling_Caustic1477531952046_152_vPosition;\nvarying vec3 Tiling_Caustic1477531952046_152_vNormal;\nvarying vec2 Tiling_Caustic1477531952046_152_vUv;\nvarying vec2 Tiling_Caustic1477531952046_152_vUv2;\nvarying vec3 Noise_Ripples1477531959288_166_vPosition;\nvarying vec3 Noise_Ripples1477531959288_166_vNormal;\nvarying vec2 Noise_Ripples1477531959288_166_vUv;\nvarying vec2 Noise_Ripples1477531959288_166_vUv2;\nvarying vec3 Wiggly_Improved1477532051339_181_vNormal;\nvarying float light;\nvarying vec3 Wiggly_Improved1477532051339_181_vPosition;\nvarying vec3 Transparent_Glow1477532059126_201_fNormal;\nvarying vec3 Transparent_Glow1477532059126_201_fPosition;\nvarying vec3 Glow_Effect1477532183055_216_fNormal;\nvarying vec3 Glow_Effect1477532183055_216_fPosition;\nvec4 Tiling_Caustic1477531952046_152_main() \n{\nvec4 Tiling_Caustic1477531952046_152_gl_Position = vec4(0.0);\nTiling_Caustic1477531952046_152_vNormal = normal;\nTiling_Caustic1477531952046_152_vUv = uv;\nTiling_Caustic1477531952046_152_vUv2 = uv2;\nTiling_Caustic1477531952046_152_vPosition = position;\nTiling_Caustic1477531952046_152_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Tiling_Caustic1477531952046_152_gl_Position *= 1.0;\n}\nvec4 Noise_Ripples1477531959288_166_main() \n{\nvec4 Noise_Ripples1477531959288_166_gl_Position = vec4(0.0);\nNoise_Ripples1477531959288_166_vNormal = normal;\nNoise_Ripples1477531959288_166_vUv = uv;\nNoise_Ripples1477531959288_166_vUv2 = uv2;\nNoise_Ripples1477531959288_166_vPosition = position;\nNoise_Ripples1477531959288_166_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Noise_Ripples1477531959288_166_gl_Position *= 1.0;\n}\nvec4 Wiggly_Improved1477532051339_181_main() \n{\nvec4 Wiggly_Improved1477532051339_181_gl_Position = vec4(0.0);\nvec3 offset = normalize(vec3(0.0) - position) * (amplitude * sin(Wiggly_Improved1477532051339_181_speed * time + position.y * frequency));\nvec3 newPosition = position + vec3(offset.x, 0.0, offset.z);\nlight = amplitude * sin(Wiggly_Improved1477532051339_181_speed * time + 1.0 + position.y * frequency);\nWiggly_Improved1477532051339_181_vPosition = newPosition;\nWiggly_Improved1477532051339_181_gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\nreturn Wiggly_Improved1477532051339_181_gl_Position *= 1.0;\n}\nvec4 Transparent_Glow1477532059126_201_main() \n{\nvec4 Transparent_Glow1477532059126_201_gl_Position = vec4(0.0);\nTransparent_Glow1477532059126_201_fNormal = normalize(normalMatrix * normal);\nvec4 pos = modelViewMatrix * vec4(position, 1.0);\nTransparent_Glow1477532059126_201_fPosition = pos.xyz;\nTransparent_Glow1477532059126_201_gl_Position = projectionMatrix * pos;\nreturn Transparent_Glow1477532059126_201_gl_Position *= 1.0;\n}\nvec4 Glow_Effect1477532183055_216_main() \n{\nvec4 Glow_Effect1477532183055_216_gl_Position = vec4(0.0);\nGlow_Effect1477532183055_216_fNormal = normalize(normalMatrix * normal);\nvec4 pos = modelViewMatrix * vec4(position, 1.0);\nGlow_Effect1477532183055_216_fPosition = pos.xyz;\nGlow_Effect1477532183055_216_gl_Position = projectionMatrix * pos;\nreturn Glow_Effect1477532183055_216_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Tiling_Caustic1477531952046_152_main() + Noise_Ripples1477531959288_166_main() + Wiggly_Improved1477532051339_181_main() + Transparent_Glow1477532059126_201_main() + Glow_Effect1477532183055_216_main();}\n";
  var uniforms$3 = {
  	cameraPosition: {
  		type: "v3",
  		glslType: "vec3"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	backgroundColor: {
  		value: {
  			r: "0",
  			g: "0",
  			b: "0"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Tiling_Caustic1477531952046_152_resolution: {
  		value: {
  			x: 1,
  			y: 1
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	Tiling_Caustic1477531952046_152_color: {
  		value: {
  			r: 1,
  			g: 1,
  			b: 1
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Tiling_Caustic1477531952046_152_speed: {
  		value: "0.5",
  		type: "f",
  		glslType: "float"
  	},
  	Tiling_Caustic1477531952046_152_brightness: {
  		value: "1.5",
  		type: "f",
  		glslType: "float"
  	},
  	noiseImage: {
  		value: null,
  		type: "t",
  		glslType: "sampler2D"
  	},
  	distortion: {
  		value: "2",
  		type: "f",
  		glslType: "float"
  	},
  	contrast: {
  		value: "1.5",
  		type: "f",
  		glslType: "float"
  	},
  	Noise_Ripples1477531959288_166_speed: {
  		value: "0.1",
  		type: "f",
  		glslType: "float"
  	},
  	Noise_Ripples1477531959288_166_color: {
  		value: {
  			r: 1,
  			g: 0.2823529411764706,
  			b: 0.4823529411764706
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Noise_Ripples1477531959288_166_brightness: {
  		value: "0.1",
  		type: "f",
  		glslType: "float"
  	},
  	Noise_Ripples1477531959288_166_resolution: {
  		value: {
  			x: "2",
  			y: "2"
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	amplitude: {
  		value: "2",
  		type: "f",
  		glslType: "float"
  	},
  	frequency: {
  		value: "2",
  		type: "f",
  		glslType: "float"
  	},
  	highlightIntensity: {
  		value: "0.4",
  		type: "f",
  		glslType: "float"
  	},
  	highlightColor: {
  		value: {
  			r: 1,
  			g: 0.5450980392156862,
  			b: 0.23529411764705882
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Wiggly_Improved1477532051339_181_color: {
  		value: {
  			r: 0,
  			g: 0,
  			b: 0
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Wiggly_Improved1477532051339_181_speed: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	},
  	Transparent_Glow1477532059126_201_color: {
  		value: {
  			r: 1,
  			g: 0.5294117647058824,
  			b: 0.8156862745098039
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Transparent_Glow1477532059126_201_start: {
  		value: "0.54674743",
  		type: "f",
  		glslType: "float"
  	},
  	Transparent_Glow1477532059126_201_end: {
  		value: "0.44399246",
  		type: "f",
  		glslType: "float"
  	},
  	Transparent_Glow1477532059126_201_alpha: {
  		value: "0.5",
  		type: "f",
  		glslType: "float"
  	},
  	Glow_Effect1477532183055_216_color: {
  		value: {
  			r: "1",
  			g: "1",
  			b: "1"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Glow_Effect1477532183055_216_start: {
  		value: "0",
  		type: "f",
  		glslType: "float"
  	},
  	Glow_Effect1477532183055_216_end: {
  		value: "1.9",
  		type: "f",
  		glslType: "float"
  	},
  	Glow_Effect1477532183055_216_alpha: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	}
  };
  var url$3 = "http://shaderfrog.com/app/view/2901";
  var user$3 = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Jelly_Shader = {
  	id: id$3,
  	name: name$3,
  	fragment: fragment$3,
  	vertex: vertex$3,
  	uniforms: uniforms$3,
  	url: url$3,
  	user: user$3
  };

  var id$4 = 2894;
  var name$4 = "Green Dance";
  var fragment$4 = "#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\nuniform float time;\nuniform float Flowing_Image_Combination1547651045656_420_speed;\nuniform float Flowing_Image_Combination1547651045656_420_resolution;\nuniform sampler2D image1;\nuniform sampler2D image2;\nuniform vec3 Flowing_Image_Combination1547651045656_420_color;\nuniform vec3 Horizontal_Stripes1547651045669_423_color1;\nuniform vec3 Horizontal_Stripes1547651045669_423_color2;\nuniform float Horizontal_Stripes1547651045669_423_speed;\nuniform float Horizontal_Stripes1547651045669_423_multiplicationFactor;\nuniform vec3 Vertical_2_Color_Graident1547651045681_426_color1;\nuniform vec3 Vertical_2_Color_Graident1547651045681_426_color2;\nuniform float Checkerboard1547651045687_429_multiplicationFactor;\nuniform float Borg_Hull1547651045698_432_speed;\nuniform float Borg_Hull1547651045698_432_resolution;\nuniform vec3 Borg_Hull1547651045698_432_color;\nuniform float brightness;\nuniform float Disco_Dots1547651045724_435_speed;\nuniform vec2 Disco_Dots1547651045724_435_resolution;\nuniform vec3 Disco_Dots1547651045724_435_color;\nvarying vec2 Flowing_Image_Combination1547651045656_420_vUv;\nvarying vec2 Horizontal_Stripes1547651045669_423_vUv;\nvarying vec2 Vertical_2_Color_Graident1547651045681_426_vUv;\nvarying vec2 Checkerboard1547651045687_429_vUv;\nvarying vec3 vPosition;\nvarying vec2 Borg_Hull1547651045698_432_vUv;\nvec2 circuit(vec2 p) \n{\np = fract(p);\nfloat r = 5.123;\nfloat v = 0.0, g = 0.0;\nr = fract(r * 9184.928);\nfloat cp, d;\nd = p.x;\ng += pow(clamp(1.0 - abs(d), 0.0, 1.0), 1000.0);\nd = p.y;\ng += pow(clamp(1.0 - abs(d), 0.0, 1.0), 1000.0);\nd = p.x - 1.0;\ng += pow(clamp(3.0 - abs(d), 0.0, 1.0), 1000.0);\nd = p.y - 1.0;\ng += pow(clamp(1.0 - abs(d), 0.0, 1.0), 10000.0);\nconst int iter = 20;\nfor (int i = 0;\n i < iter; i++) \n{\ncp = 0.5 + (r - 0.5) * 0.9;\nd = p.x - cp;\ng += pow(clamp(1. - abs(d), 0.0, 1.0), 200.0);\nif (d > 0.0) \n{\nr = fract(r * 4829.013);\np.x = (p.x - cp) / (1.0 - cp);\nv += 1.0;\n}\n else \n{\nr = fract(r * 1239.528);\np.x = p.x / cp;\n}\np = p.yx;\n}\nv /= float(iter);\nreturn vec2(g, v);\n}\nvarying vec2 Disco_Dots1547651045724_435_vUv;\nfloat rand(vec2 co) \n{\nreturn fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\nvec4 Flowing_Image_Combination1547651045656_420_main() \n{\nvec4 Flowing_Image_Combination1547651045656_420_gl_FragColor = vec4(0.0);\nvec2 uv = Flowing_Image_Combination1547651045656_420_vUv.xy * Flowing_Image_Combination1547651045656_420_resolution;\nvec4 texCol = vec4(texture2D(image1, uv));\nmat3 tfm;\ntfm[0] = vec3(texCol.z, 0.0, 0);\ntfm[1] = vec3(0.0, texCol.y, 0);\ntfm[2] = vec3(0, 0, 1.0);\nvec2 muv = (vec3(uv, 1.0) * tfm).xy + time * Flowing_Image_Combination1547651045656_420_speed;\ntexCol = vec4(vec3(texture2D(image2, muv)) * Flowing_Image_Combination1547651045656_420_color, 1.0);\nFlowing_Image_Combination1547651045656_420_gl_FragColor = texCol;\nreturn Flowing_Image_Combination1547651045656_420_gl_FragColor *= 1.0;\n}\nvec4 Horizontal_Stripes1547651045669_423_main() \n{\nvec4 Horizontal_Stripes1547651045669_423_gl_FragColor = vec4(0.0);\nfloat x = fract((Horizontal_Stripes1547651045669_423_vUv.y + (time * Horizontal_Stripes1547651045669_423_speed)) * Horizontal_Stripes1547651045669_423_multiplicationFactor);\nfloat f = smoothstep(0.40, 0.5, x) - smoothstep(0.90, 1.0, x);\nHorizontal_Stripes1547651045669_423_gl_FragColor = vec4(mix(Horizontal_Stripes1547651045669_423_color2, Horizontal_Stripes1547651045669_423_color1, f), 1.0);\nreturn Horizontal_Stripes1547651045669_423_gl_FragColor *= 0.3;\n}\nvec4 Vertical_2_Color_Graident1547651045681_426_main(void) \n{\nvec4 Vertical_2_Color_Graident1547651045681_426_gl_FragColor = vec4(0.0);\nvec3 mixCol = mix(Vertical_2_Color_Graident1547651045681_426_color2, Vertical_2_Color_Graident1547651045681_426_color1, Vertical_2_Color_Graident1547651045681_426_vUv.y);\nVertical_2_Color_Graident1547651045681_426_gl_FragColor = vec4(mixCol, 1.);\nreturn Vertical_2_Color_Graident1547651045681_426_gl_FragColor *= 1.0;\n}\nvec4 Checkerboard1547651045687_429_main() \n{\nvec4 Checkerboard1547651045687_429_gl_FragColor = vec4(0.0);\nvec2 t = Checkerboard1547651045687_429_vUv * Checkerboard1547651045687_429_multiplicationFactor;\nvec3 p = vPosition * Checkerboard1547651045687_429_multiplicationFactor;\nvec3 color;\nif (mod(floor(t.x) + floor(t.y), 2.0) == 1.0) color = vec3(1.0, 1.0, 1.0);\n else color = vec3(0.0, 0.0, 0.0);\nCheckerboard1547651045687_429_gl_FragColor = vec4(color, 1.0);\nreturn Checkerboard1547651045687_429_gl_FragColor *= -0.5;\n}\nvec4 Borg_Hull1547651045698_432_main() \n{\nvec4 Borg_Hull1547651045698_432_gl_FragColor = vec4(0.0);\nfloat scale = 2.0;\nvec2 uv = (Borg_Hull1547651045698_432_vUv.yx - 0.5) * Borg_Hull1547651045698_432_resolution;\nuv = uv * scale + vec2(0.0, time * Borg_Hull1547651045698_432_speed);\nvec2 cid2 = floor(uv);\nfloat cid = (cid2.y * 10.0 + cid2.x) * 0.1;\nvec2 dg = circuit(uv);\nfloat d = dg.x;\nvec3 col1 = (brightness - vec3(max(min(d, 2.0) - 1.0, 0.0) * 2.0 * 0.25)) * Borg_Hull1547651045698_432_color;\nBorg_Hull1547651045698_432_gl_FragColor = vec4(col1, 1.0);\nreturn Borg_Hull1547651045698_432_gl_FragColor *= -0.7;\n}\nvec4 Disco_Dots1547651045724_435_main(void) \n{\nvec4 Disco_Dots1547651045724_435_gl_FragColor = vec4(0.0);\nvec2 v = Disco_Dots1547651045724_435_vUv.xy * Disco_Dots1547651045724_435_resolution;\nfloat brightness = fract(rand(floor(v)) + time * Disco_Dots1547651045724_435_speed);\nbrightness *= 0.5 - length(fract(v) - vec2(0.5, 0.5));\nDisco_Dots1547651045724_435_gl_FragColor = vec4(2.0 * brightness * Disco_Dots1547651045724_435_color, 1.0);\nreturn Disco_Dots1547651045724_435_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = (Flowing_Image_Combination1547651045656_420_main() + Horizontal_Stripes1547651045669_423_main() + Vertical_2_Color_Graident1547651045681_426_main() + Checkerboard1547651045687_429_main() + Borg_Hull1547651045698_432_main() + Disco_Dots1547651045724_435_main());}\n";
  var vertex$4 = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec2 Flowing_Image_Combination1547651045656_420_vUv;\nvarying vec2 Horizontal_Stripes1547651045669_423_vUv;\nvarying vec2 Vertical_2_Color_Graident1547651045681_426_vUv;\nvarying vec2 Checkerboard1547651045687_429_vUv;\nvarying vec3 vPosition;\nvarying vec2 Borg_Hull1547651045698_432_vUv;\nvarying vec2 Disco_Dots1547651045724_435_vUv;\nvec4 Flowing_Image_Combination1547651045656_420_main() \n{\nvec4 Flowing_Image_Combination1547651045656_420_gl_Position = vec4(0.0);\nFlowing_Image_Combination1547651045656_420_vUv = uv;\nFlowing_Image_Combination1547651045656_420_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Flowing_Image_Combination1547651045656_420_gl_Position *= 1.0;\n}\nvec4 Horizontal_Stripes1547651045669_423_main() \n{\nvec4 Horizontal_Stripes1547651045669_423_gl_Position = vec4(0.0);\nHorizontal_Stripes1547651045669_423_vUv = uv;\nHorizontal_Stripes1547651045669_423_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Horizontal_Stripes1547651045669_423_gl_Position *= 0.3;\n}\nvec4 Vertical_2_Color_Graident1547651045681_426_main() \n{\nvec4 Vertical_2_Color_Graident1547651045681_426_gl_Position = vec4(0.0);\nVertical_2_Color_Graident1547651045681_426_vUv = uv;\nVertical_2_Color_Graident1547651045681_426_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Vertical_2_Color_Graident1547651045681_426_gl_Position *= 1.0;\n}\nvec4 Checkerboard1547651045687_429_main() \n{\nvec4 Checkerboard1547651045687_429_gl_Position = vec4(0.0);\nCheckerboard1547651045687_429_vUv = uv;\nvPosition = position;\nCheckerboard1547651045687_429_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Checkerboard1547651045687_429_gl_Position *= -0.5;\n}\nvec4 Borg_Hull1547651045698_432_main() \n{\nvec4 Borg_Hull1547651045698_432_gl_Position = vec4(0.0);\nBorg_Hull1547651045698_432_vUv = uv;\nBorg_Hull1547651045698_432_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Borg_Hull1547651045698_432_gl_Position *= -0.7;\n}\nvec4 Disco_Dots1547651045724_435_main() \n{\nvec4 Disco_Dots1547651045724_435_gl_Position = vec4(0.0);\nDisco_Dots1547651045724_435_vUv = uv;\nDisco_Dots1547651045724_435_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Disco_Dots1547651045724_435_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Flowing_Image_Combination1547651045656_420_main() + Horizontal_Stripes1547651045669_423_main() + Vertical_2_Color_Graident1547651045681_426_main() + Checkerboard1547651045687_429_main() + Borg_Hull1547651045698_432_main() + Disco_Dots1547651045724_435_main();}\n";
  var uniforms$4 = {
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	image1: {
  		value: null,
  		type: "t",
  		glslType: "sampler2D"
  	},
  	image2: {
  		value: null,
  		type: "t",
  		glslType: "sampler2D"
  	},
  	Flowing_Image_Combination1547651045656_420_speed: {
  		value: "0.1",
  		type: "f",
  		glslType: "float"
  	},
  	Flowing_Image_Combination1547651045656_420_resolution: {
  		value: "2",
  		type: "f",
  		glslType: "float"
  	},
  	Flowing_Image_Combination1547651045656_420_color: {
  		value: {
  			r: 1,
  			g: 1,
  			b: 1
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Horizontal_Stripes1547651045669_423_color1: {
  		value: {
  			r: 1,
  			g: 1,
  			b: 1
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Horizontal_Stripes1547651045669_423_color2: {
  		value: {
  			r: 0,
  			g: 0,
  			b: 0
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Horizontal_Stripes1547651045669_423_speed: {
  		value: "0",
  		type: "f",
  		glslType: "float"
  	},
  	Horizontal_Stripes1547651045669_423_multiplicationFactor: {
  		value: "6",
  		type: "f",
  		glslType: "float"
  	},
  	Vertical_2_Color_Graident1547651045681_426_color1: {
  		value: {
  			r: 0,
  			g: 0,
  			b: 0
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Vertical_2_Color_Graident1547651045681_426_color2: {
  		value: {
  			r: 0,
  			g: 0.9764705882352941,
  			b: 0
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Checkerboard1547651045687_429_multiplicationFactor: {
  		value: "12",
  		type: "f",
  		glslType: "float"
  	},
  	brightness: {
  		value: "0.25",
  		type: "f",
  		glslType: "float"
  	},
  	Borg_Hull1547651045698_432_speed: {
  		value: "0.001",
  		type: "f",
  		glslType: "float"
  	},
  	Borg_Hull1547651045698_432_resolution: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	},
  	Borg_Hull1547651045698_432_color: {
  		value: {
  			r: 1,
  			g: 1,
  			b: 1
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Disco_Dots1547651045724_435_speed: {
  		value: "0.01",
  		type: "f",
  		glslType: "float"
  	},
  	Disco_Dots1547651045724_435_resolution: {
  		value: {
  			x: "12",
  			y: "12",
  			z: 0
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	Disco_Dots1547651045724_435_color: {
  		value: {
  			r: 0.5254901960784314,
  			g: 0.9725490196078431,
  			b: 0.6352941176470588
  		},
  		type: "c",
  		glslType: "vec3"
  	}
  };
  var url$4 = "http://shaderfrog.com/app/view/2894";
  var user$4 = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/sirfizx"
  };
  var Green_Dance_Shader = {
  	id: id$4,
  	name: name$4,
  	fragment: fragment$4,
  	vertex: vertex$4,
  	uniforms: uniforms$4,
  	url: url$4,
  	user: user$4
  };

  var id$5 = 2987;
  var name$5 = "Cosmic Shader";
  var fragment$5 = "#define TAU 6.28318530718\n#define MAX_ITER 5\n#define tau 6.2831853\n\n#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\nprecision highp int;\nuniform vec2 Tiling_Caustic1477531952046_152_resolution;\nuniform vec3 backgroundColor;\nuniform vec3 Tiling_Caustic1477531952046_152_color;\nuniform float Tiling_Caustic1477531952046_152_speed;\nuniform float Tiling_Caustic1477531952046_152_brightness;\nuniform float time;\nuniform float contrast;\nuniform float distortion;\nuniform float Noise_Ripples1477531959288_166_speed;\nuniform vec3 Noise_Ripples1477531959288_166_color;\nuniform float Noise_Ripples1477531959288_166_brightness;\nuniform sampler2D noiseImage;\nuniform vec2 Noise_Ripples1477531959288_166_resolution;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\nuniform float highlightIntensity;\nuniform vec3 highlightColor;\nuniform vec3 Wiggly_Improved1477532051339_181_color;\nuniform vec3 Transparent_Glow1477532059126_201_color;\nuniform float Transparent_Glow1477532059126_201_start;\nuniform float Transparent_Glow1477532059126_201_end;\nuniform float Transparent_Glow1477532059126_201_alpha;\nuniform vec3 Glow_Effect1477532183055_216_color;\nuniform float Glow_Effect1477532183055_216_start;\nuniform float Glow_Effect1477532183055_216_end;\nuniform float Glow_Effect1477532183055_216_alpha;\nvarying vec2 Tiling_Caustic1477531952046_152_vUv;\nvarying vec2 Noise_Ripples1477531959288_166_vUv;\nmat2 makem2(in float theta) \n{\nfloat c = cos(theta);\nfloat s = sin(theta);\nreturn mat2(c, -s, s, c);\n}\nfloat noise(in vec2 x) \n{\nreturn texture2D(noiseImage, x * .01).x;\n}\nfloat fbm(in vec2 p) \n{\nfloat z = 2.;\nfloat rz = 0.;\nvec2 bp = p;\nfor (float i = 1.;\n i < 6.0; i++) \n{\nrz += abs((noise(p) - 0.5) * 2.0) / z;\nz = z * 2.;\np = p * 2.;\n}\nreturn rz;\n}\nfloat dualfbm(in vec2 p) \n{\nvec2 p2 = p * distortion;\nvec2 basis = vec2(fbm(p2 - time * Noise_Ripples1477531959288_166_speed * 1.6), fbm(p2 + time * Noise_Ripples1477531959288_166_speed * 1.7));\nbasis = (basis - .5) * .2;\np += basis;\nreturn fbm(p * makem2(time * Noise_Ripples1477531959288_166_speed * 0.2));\n}\nvarying vec3 Wiggly_Improved1477532051339_181_vNormal;\nvarying float light;\nvarying vec3 Transparent_Glow1477532059126_201_fPosition;\nvarying vec3 Transparent_Glow1477532059126_201_fNormal;\nvarying vec3 Glow_Effect1477532183055_216_fPosition;\nvarying vec3 Glow_Effect1477532183055_216_fNormal;\nvec4 Tiling_Caustic1477531952046_152_main() \n{\nvec4 Tiling_Caustic1477531952046_152_gl_FragColor = vec4(0.0);\nvec2 uv = Tiling_Caustic1477531952046_152_vUv * Tiling_Caustic1477531952046_152_resolution;\nvec2 p = mod(uv * TAU, TAU) - 250.0;\nvec2 i = vec2(p);\nfloat c = 1.0;\nfloat inten = 0.005;\nfor (int n = 0;\n n < MAX_ITER; n++) \n{\nfloat t = time * Tiling_Caustic1477531952046_152_speed * (1.0 - (3.5 / float(n + 1)));\ni = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));\nc += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));\n}\nc /= float(MAX_ITER);\nc = 1.17 - pow(c, Tiling_Caustic1477531952046_152_brightness);\nvec3 rgb = vec3(pow(abs(c), 8.0));\nTiling_Caustic1477531952046_152_gl_FragColor = vec4(rgb * Tiling_Caustic1477531952046_152_color + backgroundColor, 1.0);\nreturn Tiling_Caustic1477531952046_152_gl_FragColor *= 1.0;\n}\nvec4 Noise_Ripples1477531959288_166_main() \n{\nvec4 Noise_Ripples1477531959288_166_gl_FragColor = vec4(0.0);\nvec2 p = (Noise_Ripples1477531959288_166_vUv.xy - 0.5) * Noise_Ripples1477531959288_166_resolution;\nfloat rz = dualfbm(p);\nvec3 col = (Noise_Ripples1477531959288_166_color / rz) * Noise_Ripples1477531959288_166_brightness;\ncol = ((col - 0.5) * max(contrast, 0.0)) + 0.5;\nNoise_Ripples1477531959288_166_gl_FragColor = vec4(col, 1.0);\nreturn Noise_Ripples1477531959288_166_gl_FragColor *= 1.0;\n}\nvec4 Wiggly_Improved1477532051339_181_main() \n{\nvec4 Wiggly_Improved1477532051339_181_gl_FragColor = vec4(0.0);\nWiggly_Improved1477532051339_181_gl_FragColor = vec4(clamp(highlightColor * highlightIntensity * light, 0.0, 1.0), 1.0);\nreturn Wiggly_Improved1477532051339_181_gl_FragColor *= 1.0;\n}\nvec4 Transparent_Glow1477532059126_201_main() \n{\nvec4 Transparent_Glow1477532059126_201_gl_FragColor = vec4(0.0);\nvec3 normal = normalize(Transparent_Glow1477532059126_201_fNormal);\nvec3 eye = normalize(-Transparent_Glow1477532059126_201_fPosition.xyz);\nfloat rim = smoothstep(Transparent_Glow1477532059126_201_start, Transparent_Glow1477532059126_201_end, 1.0 - dot(normal, eye));\nfloat value = clamp(rim * Transparent_Glow1477532059126_201_alpha, 0.0, 1.0);\nTransparent_Glow1477532059126_201_gl_FragColor = vec4(Transparent_Glow1477532059126_201_color * value, value);\nreturn Transparent_Glow1477532059126_201_gl_FragColor *= 1.0;\n}\nvec4 Glow_Effect1477532183055_216_main() \n{\nvec4 Glow_Effect1477532183055_216_gl_FragColor = vec4(0.0);\nvec3 normal = normalize(Glow_Effect1477532183055_216_fNormal);\nvec3 eye = normalize(-Glow_Effect1477532183055_216_fPosition.xyz);\nfloat rim = smoothstep(Glow_Effect1477532183055_216_start, Glow_Effect1477532183055_216_end, 1.0 - dot(normal, eye));\nGlow_Effect1477532183055_216_gl_FragColor = vec4(clamp(rim, 0.0, 1.0) * Glow_Effect1477532183055_216_alpha * Glow_Effect1477532183055_216_color, 1.0);\nreturn Glow_Effect1477532183055_216_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = (Glow_Effect1477532183055_216_main() + Noise_Ripples1477531959288_166_main() + Tiling_Caustic1477531952046_152_main() + Wiggly_Improved1477532051339_181_main());}\n";
  var vertex$5 = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nuniform float Wiggly_Improved1477532051339_181_speed;\nuniform float frequency;\nuniform float amplitude;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec3 Tiling_Caustic1477531952046_152_vPosition;\nvarying vec3 Tiling_Caustic1477531952046_152_vNormal;\nvarying vec2 Tiling_Caustic1477531952046_152_vUv;\nvarying vec2 Tiling_Caustic1477531952046_152_vUv2;\nvarying vec3 Noise_Ripples1477531959288_166_vPosition;\nvarying vec3 Noise_Ripples1477531959288_166_vNormal;\nvarying vec2 Noise_Ripples1477531959288_166_vUv;\nvarying vec2 Noise_Ripples1477531959288_166_vUv2;\nvarying vec3 Wiggly_Improved1477532051339_181_vNormal;\nvarying float light;\nvarying vec3 Wiggly_Improved1477532051339_181_vPosition;\nvarying vec3 Transparent_Glow1477532059126_201_fNormal;\nvarying vec3 Transparent_Glow1477532059126_201_fPosition;\nvarying vec3 Glow_Effect1477532183055_216_fNormal;\nvarying vec3 Glow_Effect1477532183055_216_fPosition;\nvec4 Tiling_Caustic1477531952046_152_main() \n{\nvec4 Tiling_Caustic1477531952046_152_gl_Position = vec4(0.0);\nTiling_Caustic1477531952046_152_vNormal = normal;\nTiling_Caustic1477531952046_152_vUv = uv;\nTiling_Caustic1477531952046_152_vUv2 = uv2;\nTiling_Caustic1477531952046_152_vPosition = position;\nTiling_Caustic1477531952046_152_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Tiling_Caustic1477531952046_152_gl_Position *= 1.0;\n}\nvec4 Noise_Ripples1477531959288_166_main() \n{\nvec4 Noise_Ripples1477531959288_166_gl_Position = vec4(0.0);\nNoise_Ripples1477531959288_166_vNormal = normal;\nNoise_Ripples1477531959288_166_vUv = uv;\nNoise_Ripples1477531959288_166_vUv2 = uv2;\nNoise_Ripples1477531959288_166_vPosition = position;\nNoise_Ripples1477531959288_166_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Noise_Ripples1477531959288_166_gl_Position *= 1.0;\n}\nvec4 Wiggly_Improved1477532051339_181_main() \n{\nvec4 Wiggly_Improved1477532051339_181_gl_Position = vec4(0.0);\nvec3 offset = normalize(vec3(0.0) - position) * (amplitude * sin(Wiggly_Improved1477532051339_181_speed * time + position.y * frequency));\nvec3 newPosition = position + vec3(offset.x, 0.0, offset.z);\nlight = amplitude * sin(Wiggly_Improved1477532051339_181_speed * time + 1.0 + position.y * frequency);\nWiggly_Improved1477532051339_181_vPosition = newPosition;\nWiggly_Improved1477532051339_181_gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\nreturn Wiggly_Improved1477532051339_181_gl_Position *= 1.0;\n}\nvec4 Transparent_Glow1477532059126_201_main() \n{\nvec4 Transparent_Glow1477532059126_201_gl_Position = vec4(0.0);\nTransparent_Glow1477532059126_201_fNormal = normalize(normalMatrix * normal);\nvec4 pos = modelViewMatrix * vec4(position, 1.0);\nTransparent_Glow1477532059126_201_fPosition = pos.xyz;\nTransparent_Glow1477532059126_201_gl_Position = projectionMatrix * pos;\nreturn Transparent_Glow1477532059126_201_gl_Position *= 1.0;\n}\nvec4 Glow_Effect1477532183055_216_main() \n{\nvec4 Glow_Effect1477532183055_216_gl_Position = vec4(0.0);\nGlow_Effect1477532183055_216_fNormal = normalize(normalMatrix * normal);\nvec4 pos = modelViewMatrix * vec4(position, 1.0);\nGlow_Effect1477532183055_216_fPosition = pos.xyz;\nGlow_Effect1477532183055_216_gl_Position = projectionMatrix * pos;\nreturn Glow_Effect1477532183055_216_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Tiling_Caustic1477531952046_152_main() + Noise_Ripples1477531959288_166_main() + Wiggly_Improved1477532051339_181_main() + Transparent_Glow1477532059126_201_main() + Glow_Effect1477532183055_216_main();}\n";
  var uniforms$5 = {
  	cameraPosition: {
  		type: "v3",
  		glslType: "vec3"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	backgroundColor: {
  		value: {
  			r: 0.08235294117647059,
  			g: 0.06274509803921569,
  			b: 0.19607843137254902
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Tiling_Caustic1477531952046_152_resolution: {
  		value: {
  			x: 1,
  			y: 1
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	Tiling_Caustic1477531952046_152_color: {
  		value: {
  			r: 0.4666666666666667,
  			g: 0.9294117647058824,
  			b: 0.9529411764705882
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Tiling_Caustic1477531952046_152_speed: {
  		value: "0.5",
  		type: "f",
  		glslType: "float"
  	},
  	Tiling_Caustic1477531952046_152_brightness: {
  		value: "1.5",
  		type: "f",
  		glslType: "float"
  	},
  	noiseImage: {
  		value: null,
  		type: "t",
  		glslType: "sampler2D"
  	},
  	distortion: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	},
  	contrast: {
  		value: "1.4",
  		type: "f",
  		glslType: "float"
  	},
  	Noise_Ripples1477531959288_166_speed: {
  		value: "0.1",
  		type: "f",
  		glslType: "float"
  	},
  	Noise_Ripples1477531959288_166_color: {
  		value: {
  			r: 0.6823529411764706,
  			g: 0.7725490196078432,
  			b: 0.6666666666666666
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Noise_Ripples1477531959288_166_brightness: {
  		value: "0.1",
  		type: "f",
  		glslType: "float"
  	},
  	Noise_Ripples1477531959288_166_resolution: {
  		value: {
  			x: "2",
  			y: "2"
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	amplitude: {
  		value: "0.2",
  		type: "f",
  		glslType: "float"
  	},
  	frequency: {
  		value: "2",
  		type: "f",
  		glslType: "float"
  	},
  	highlightIntensity: {
  		value: ".5",
  		type: "f",
  		glslType: "float"
  	},
  	highlightColor: {
  		value: {
  			r: 0.8274509803921568,
  			g: 0.5882352941176471,
  			b: 0.2627450980392157
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Wiggly_Improved1477532051339_181_color: {
  		value: {
  			r: 0,
  			g: 0,
  			b: 0
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Wiggly_Improved1477532051339_181_speed: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	},
  	Transparent_Glow1477532059126_201_color: {
  		value: {
  			r: 0.9803921568627451,
  			g: 0.9215686274509803,
  			b: 0.596078431372549
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Transparent_Glow1477532059126_201_start: {
  		value: "0.54674743",
  		type: "f",
  		glslType: "float"
  	},
  	Transparent_Glow1477532059126_201_end: {
  		value: "0.44399246",
  		type: "f",
  		glslType: "float"
  	},
  	Transparent_Glow1477532059126_201_alpha: {
  		value: "0.5",
  		type: "f",
  		glslType: "float"
  	},
  	Glow_Effect1477532183055_216_color: {
  		value: {
  			r: 0.9921568627450981,
  			g: 0.7254901960784313,
  			b: 0.3411764705882353
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Glow_Effect1477532183055_216_start: {
  		value: "0",
  		type: "f",
  		glslType: "float"
  	},
  	Glow_Effect1477532183055_216_end: {
  		value: "1.9",
  		type: "f",
  		glslType: "float"
  	},
  	Glow_Effect1477532183055_216_alpha: {
  		value: "2",
  		type: "f",
  		glslType: "float"
  	}
  };
  var url$5 = "http://shaderfrog.com/app/view/2987";
  var user$5 = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Cosmic_Shader = {
  	id: id$5,
  	name: name$5,
  	fragment: fragment$5,
  	vertex: vertex$5,
  	uniforms: uniforms$5,
  	url: url$5,
  	user: user$5
  };

  var id$6 = 138;
  var name$6 = "Cool Tiles Shader";
  var fragment$6 = "precision highp float;\nprecision highp int;\nuniform float time;\nuniform float Flowing_Image_Combination1532324436254_38_speed;\nuniform float resolution;\nuniform sampler2D image1;\nuniform sampler2D image2;\nuniform vec3 Flowing_Image_Combination1532324436254_38_color;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform vec3 lightPosition;\nuniform sampler2D map;\nuniform vec3 diffuseColor;\nuniform vec3 specularColor;\nuniform float shininess;\nuniform vec2 scaleBias;\nuniform float scale;\nuniform float Disco_Ball1532324436329_44_speed;\nuniform vec3 Vignette1532324436351_47_color;\nuniform float intensity;\nuniform float spread;\nuniform float mirrorReflection;\nuniform samplerCube reflectionSampler;\nvarying vec2 Flowing_Image_Combination1532324436254_38_vUv;\nvarying vec3 vPosition;\nvarying vec3 Parallax_Mapping1532324436298_41_vNormal;\nvarying vec2 Parallax_Mapping1532324436298_41_vUv;\nvarying vec2 vUv2;\nvarying vec3 tsPosition;\nvarying vec3 tsCameraPosition;\nvarying vec3 tsLightSource;\nvarying vec3 Disco_Ball1532324436329_44_vNormal;\nvarying vec2 Disco_Ball1532324436329_44_vUv;\nfloat rand(in vec2 p) \n{\nreturn abs(fract(sin(p.x * 95325.328 + p.y * -48674.077) + cos(p.x * -46738.322 + p.y * 76485.077) + time * Disco_Ball1532324436329_44_speed) - .5) + .5;\n}\nvarying vec2 Vignette1532324436351_47_vUv;\nvarying vec3 vReflect;\nvec4 Flowing_Image_Combination1532324436254_38_main() \n{\nvec4 Flowing_Image_Combination1532324436254_38_gl_FragColor = vec4(0.0);\nvec2 uv = Flowing_Image_Combination1532324436254_38_vUv.xy * resolution;\nvec4 texCol = vec4(texture2D(image1, uv));\nmat3 tfm;\ntfm[0] = vec3(texCol.z, 0.0, 0);\ntfm[1] = vec3(0.0, texCol.y, 0);\ntfm[2] = vec3(0, 0, 1.0);\nvec2 muv = (vec3(uv, 1.0) * tfm).xy + time * Flowing_Image_Combination1532324436254_38_speed;\ntexCol = vec4(vec3(texture2D(image2, muv)) * Flowing_Image_Combination1532324436254_38_color, 1.0);\nFlowing_Image_Combination1532324436254_38_gl_FragColor = texCol;\nreturn Flowing_Image_Combination1532324436254_38_gl_FragColor *= 0.6;\n}\nvec4 Parallax_Mapping1532324436298_41_main() \n{\nvec4 Parallax_Mapping1532324436298_41_gl_FragColor = vec4(0.0);\nfloat height = texture2D(map, Parallax_Mapping1532324436298_41_vUv).a;\nfloat v = height * scaleBias.r - scaleBias.g;\nvec3 eye = normalize(tsCameraPosition);\nvec2 newCoords = Parallax_Mapping1532324436298_41_vUv + (eye.xy * v);\nvec3 color = vec3(0.0);\nvec3 normal = texture2D(map, newCoords).rgb * 2.0 - 1.0;\nvec3 viewVector = normalize(tsCameraPosition - tsPosition);\nvec3 lightVector = normalize(tsLightSource - tsPosition);\nfloat nxDir = max(0.0, dot(normal, lightVector));\nfloat specularPower = 0.0;\nif (nxDir != 0.0) \n{\nvec3 halfVector = normalize(lightVector + viewVector);\nfloat nxHalf = max(0.0, dot(normal, halfVector));\nspecularPower = pow(nxHalf, shininess);\n}\n vec3 specular = specularColor * specularPower;\nParallax_Mapping1532324436298_41_gl_FragColor = vec4((diffuseColor * nxDir) + specular, 1.0);\nreturn Parallax_Mapping1532324436298_41_gl_FragColor *= 0.9;\n}\nvec4 Disco_Ball1532324436329_44_main(void) \n{\nvec4 Disco_Ball1532324436329_44_gl_FragColor = vec4(0.0);\nvec2 position = (Disco_Ball1532324436329_44_vUv.xy) * scale;\nvec3 color = vec3(rand(vec2(floor(position.x), floor(position.y))), rand(vec2(floor(position.x), floor(position.x))), rand(vec2(floor(position.x * .5), floor(position.y * .5))));\nfloat scale = 1. - pow(pow((mod(position.x, 1.) - .5), 2.) + pow((mod(position.y, 1.) - .5), 2.), .7);\nDisco_Ball1532324436329_44_gl_FragColor = vec4(color * scale, 1.);\nreturn Disco_Ball1532324436329_44_gl_FragColor *= 0.1;\n}\nvec4 Vignette1532324436351_47_main() \n{\nvec4 Vignette1532324436351_47_gl_FragColor = vec4(0.0);\nfloat vignette = Vignette1532324436351_47_vUv.y * Vignette1532324436351_47_vUv.x * (1. - Vignette1532324436351_47_vUv.x) * (1. - Vignette1532324436351_47_vUv.y) * spread;\nvec3 multiplier = 1.0 - (vignette * Vignette1532324436351_47_color * intensity);\nVignette1532324436351_47_gl_FragColor = vec4(clamp(Vignette1532324436351_47_color * multiplier, 0.0, 1.0), multiplier);\nreturn Vignette1532324436351_47_gl_FragColor *= 0.2;\n}\nvec4 Reflection_Cube_Map1532324436362_50_main() \n{\nvec4 Reflection_Cube_Map1532324436362_50_gl_FragColor = vec4(0.0);\nvec4 cubeColor = textureCube(reflectionSampler, vec3(mirrorReflection * vReflect.x, vReflect.yz));\ncubeColor.w = 1.0;\nReflection_Cube_Map1532324436362_50_gl_FragColor = cubeColor;\nreturn Reflection_Cube_Map1532324436362_50_gl_FragColor *= 0.3;\n}\nvoid main() \n{\ngl_FragColor = (Flowing_Image_Combination1532324436254_38_main() + Parallax_Mapping1532324436298_41_main() + Disco_Ball1532324436329_44_main() + Vignette1532324436351_47_main() + Reflection_Cube_Map1532324436362_50_main());}\n";
  var vertex$6 = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 lightPosition;\nuniform vec3 cameraPosition;\nuniform float time;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec2 Flowing_Image_Combination1532324436254_38_vUv;\nattribute vec4 tangent;\nvarying vec3 vPosition;\nvarying vec3 Parallax_Mapping1532324436298_41_vNormal;\nvarying vec2 Parallax_Mapping1532324436298_41_vUv;\nvarying vec2 vUv2;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 tsPosition;\nvarying vec3 tsCameraPosition;\nvarying vec3 tsLightSource;\nvarying vec2 Disco_Ball1532324436329_44_vUv;\nvarying vec3 Disco_Ball1532324436329_44_vNormal;\nvarying vec2 Vignette1532324436351_47_vUv;\nvarying vec3 vReflect;\nvec4 Flowing_Image_Combination1532324436254_38_main() \n{\nvec4 Flowing_Image_Combination1532324436254_38_gl_Position = vec4(0.0);\nFlowing_Image_Combination1532324436254_38_vUv = uv;\nFlowing_Image_Combination1532324436254_38_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Flowing_Image_Combination1532324436254_38_gl_Position *= 0.6;\n}\nvec4 Parallax_Mapping1532324436298_41_main(void) \n{\nvec4 Parallax_Mapping1532324436298_41_gl_Position = vec4(0.0);\nParallax_Mapping1532324436298_41_vUv = uv;\nvPosition = position;\nParallax_Mapping1532324436298_41_vNormal = normalize(normal);\nvTangent = normalize(tangent.xyz);\nvBinormal = normalize(cross(Parallax_Mapping1532324436298_41_vNormal, vTangent) * tangent.w);\nmat3 TBNMatrix = mat3(vTangent, vBinormal, Parallax_Mapping1532324436298_41_vNormal);\ntsPosition = position * TBNMatrix;\ntsCameraPosition = cameraPosition * TBNMatrix;\ntsLightSource = lightPosition * TBNMatrix;\nParallax_Mapping1532324436298_41_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Parallax_Mapping1532324436298_41_gl_Position *= 0.9;\n}\nvec4 Disco_Ball1532324436329_44_main() \n{\nvec4 Disco_Ball1532324436329_44_gl_Position = vec4(0.0);\nDisco_Ball1532324436329_44_vNormal = normal;\nDisco_Ball1532324436329_44_vUv = uv;\nDisco_Ball1532324436329_44_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Disco_Ball1532324436329_44_gl_Position *= 0.1;\n}\nvec4 Vignette1532324436351_47_main() \n{\nvec4 Vignette1532324436351_47_gl_Position = vec4(0.0);\nVignette1532324436351_47_vUv = uv;\nVignette1532324436351_47_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Vignette1532324436351_47_gl_Position *= 0.2;\n}\nvec4 Reflection_Cube_Map1532324436362_50_main() \n{\nvec4 Reflection_Cube_Map1532324436362_50_gl_Position = vec4(0.0);\nvec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\nvec3 cameraToVertex = normalize(worldPosition - cameraPosition);\nvec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);\nvReflect = reflect(cameraToVertex, worldNormal);\nReflection_Cube_Map1532324436362_50_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Reflection_Cube_Map1532324436362_50_gl_Position *= 0.3;\n}\nvoid main() \n{\ngl_Position = Flowing_Image_Combination1532324436254_38_main() + Parallax_Mapping1532324436298_41_main() + Disco_Ball1532324436329_44_main() + Vignette1532324436351_47_main() + Reflection_Cube_Map1532324436362_50_main();}\n";
  var uniforms$6 = {
  	resolution: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	},
  	image1: {
  		value: null,
  		type: "t",
  		glslType: "sampler2D"
  	},
  	image2: {
  		value: null,
  		type: "t",
  		glslType: "sampler2D"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	Flowing_Image_Combination1532324436254_38_speed: {
  		value: "0.05",
  		type: "f",
  		glslType: "float"
  	},
  	Flowing_Image_Combination1532324436254_38_color: {
  		value: {
  			r: 1,
  			g: "1",
  			b: "1"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	map: {
  		value: null,
  		type: "t",
  		glslType: "sampler2D"
  	},
  	diffuseColor: {
  		value: {
  			r: 0.2235294117647059,
  			g: 0.2235294117647059,
  			b: 0.2235294117647059
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	specularColor: {
  		value: {
  			r: 1,
  			g: 1,
  			b: 1
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	shininess: {
  		value: "10",
  		type: "f",
  		glslType: "float"
  	},
  	scaleBias: {
  		value: {
  			x: "0.04",
  			y: "0.001",
  			z: 0
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	Parallax_Mapping1532324436298_41_lightPosition: {
  		value: {
  			x: -0.04058137118438604,
  			y: 0.3281411389717793,
  			z: 2.4780388506290807
  		},
  		type: "v3",
  		glslType: "vec3"
  	},
  	scale: {
  		value: "4",
  		type: "f",
  		glslType: "float"
  	},
  	Disco_Ball1532324436329_44_speed: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	},
  	intensity: {
  		value: "0.5",
  		type: "f",
  		glslType: "float"
  	},
  	spread: {
  		value: "100",
  		type: "f",
  		glslType: "float"
  	},
  	Vignette1532324436351_47_color: {
  		value: {
  			r: 0.8980392156862745,
  			g: 0.9607843137254902,
  			b: 0.9921568627450981
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	mirrorReflection: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	},
  	reflectionSampler: {
  		value: null,
  		type: "t",
  		glslType: "samplerCube"
  	}
  };
  var url$6 = "http://shaderfrog.com/app/view/138";
  var user$6 = {
  	username: "andrewray",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Cool_Tiles_Shader = {
  	id: id$6,
  	name: name$6,
  	fragment: fragment$6,
  	vertex: vertex$6,
  	uniforms: uniforms$6,
  	url: url$6,
  	user: user$6
  };

  var id$7 = 3033;
  var name$7 = "Disco Shader";
  var fragment$7 = "precision highp float;\nprecision highp int;\nuniform float time;\nuniform float scale;\nuniform float speed;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nfloat rand(in vec2 p) \n{\nreturn abs(fract(sin(p.x * 95325.328 + p.y * -48674.077) + cos(p.x * -46738.322 + p.y * 76485.077) + time * speed) - .5) + .5;\n}\nvec4 Disco_Ball1551665981578_213_main(void) \n{\nvec4 Disco_Ball1551665981578_213_gl_FragColor = vec4(0.0);\nvec2 position = (vUv.xy) * scale;\nvec3 color = vec3(rand(vec2(floor(position.x), floor(position.y))), rand(vec2(floor(position.x), floor(position.x))), rand(vec2(floor(position.x * .5), floor(position.y * .5))));\nfloat scale = 1. - pow(pow((mod(position.x, 1.) - .5), 2.) + pow((mod(position.y, 1.) - .5), 2.), .7);\nDisco_Ball1551665981578_213_gl_FragColor = vec4(color * scale, 1.);\nreturn Disco_Ball1551665981578_213_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = Disco_Ball1551665981578_213_main();}\n";
  var vertex$7 = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvec4 Disco_Ball1551665981578_213_main() \n{\nvec4 Disco_Ball1551665981578_213_gl_Position = vec4(0.0);\nvNormal = normal;\nvUv = uv;\nDisco_Ball1551665981578_213_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Disco_Ball1551665981578_213_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Disco_Ball1551665981578_213_main();}\n";
  var uniforms$7 = {
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	scale: {
  		value: "30",
  		type: "f",
  		glslType: "float"
  	},
  	speed: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	}
  };
  var url$7 = "http://shaderfrog.com/app/view/3033";
  var user$7 = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Disco_Shader = {
  	id: id$7,
  	name: name$7,
  	fragment: fragment$7,
  	vertex: vertex$7,
  	uniforms: uniforms$7,
  	url: url$7,
  	user: user$7
  };

  var id$8 = 3053;
  var name$8 = "Marching Ants Shader";
  var fragment$8 = "precision highp float;\nprecision highp int;\nuniform float edgeWidth;\nuniform float sharpness;\nuniform float antSize;\nuniform float antSpeed;\nuniform float time;\nuniform vec3 color;\nvarying vec2 vUv;\nvec4 Marching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_main() \n{\nvec4 Marching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_gl_FragColor = vec4(0.0);\nvec2 borderUv = abs((vUv - 0.5) * 2.0);\nfloat leftRight = clamp((borderUv.x - (1.0 - edgeWidth)) * sharpness, 0.0, 1.0);\nfloat upDown = clamp((borderUv.y - (1.0 - edgeWidth)) * sharpness, 0.0, 1.0);\nvec2 antUv = vUv * antSize;\nfloat antOffset = time * antSpeed;\nif (mod(floor(antUv.x + antOffset), 2.0) != 1.0) \n{\nupDown = 0.0;\n}\n if (mod(floor(antUv.y + antOffset), 2.0) != 1.0) \n{\nleftRight = 0.0;\n}\n float alpha = clamp(leftRight + upDown, 0.0, 1.0);\nMarching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_gl_FragColor = vec4(color * alpha, alpha);\nreturn Marching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = Marching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_main();}\n";
  var vertex$8 = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec2 vUv;\nvec4 Marching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_main() \n{\nvec4 Marching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_gl_Position = vec4(0.0);\nvUv = uv;\nMarching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Marching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Marching_Ants_UV_Based_Border_Edge_Outline1551694606526_1465_main();}\n";
  var uniforms$8 = {
  	color: {
  		value: {
  			r: "1",
  			g: "1",
  			b: "1"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	edgeWidth: {
  		value: "0.1",
  		type: "f",
  		glslType: "float"
  	},
  	sharpness: {
  		value: "100",
  		type: "f",
  		glslType: "float"
  	},
  	antSize: {
  		value: "10",
  		type: "f",
  		glslType: "float"
  	},
  	antSpeed: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	}
  };
  var url$8 = "http://shaderfrog.com/app/view/3053";
  var user$8 = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Marching_Ants_Shader = {
  	id: id$8,
  	name: name$8,
  	fragment: fragment$8,
  	vertex: vertex$8,
  	uniforms: uniforms$8,
  	url: url$8,
  	user: user$8
  };

  var id$9 = 3060;
  var name$9 = "Goo Shader";
  var fragment$9 = "precision highp float;\nprecision highp int;\nuniform vec3 color;\nuniform float time;\nuniform float Configurable_Oil_Spill1525321525720_28_speed;\nuniform vec3 color1;\nuniform vec3 color2;\nuniform vec3 color3;\nuniform vec3 color4;\nvarying float vNoise;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nfloat rand(vec2 n) \n{\nreturn fract(cos(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n}\nfloat noise(vec2 n) \n{\nconst vec2 d = vec2(0.0, 1.0);\nvec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));\nreturn mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);\n}\nfloat fbm(vec2 n) \n{\nfloat total = 0.0, amplitude = 1.0;\nfor (int i = 0;\n i < 7; i++) \n{\ntotal += noise(n) * amplitude;\nn += n;\namplitude *= 0.5;\n}\nreturn total;\n}\nvec4 Big_Wiggles1525321525655_25_main() \n{\nvec4 Big_Wiggles1525321525655_25_gl_FragColor = vec4(0.0);\nBig_Wiggles1525321525655_25_gl_FragColor = vec4(color * vNoise, 1.0);\nreturn Big_Wiggles1525321525655_25_gl_FragColor *= 1.0;\n}\nvec4 Configurable_Oil_Spill1525321525720_28_main() \n{\nvec4 Configurable_Oil_Spill1525321525720_28_gl_FragColor = vec4(0.0);\nconst vec3 c5 = vec3(0.1);\nconst vec3 c6 = vec3(0.9);\nvec2 p = vUv.xy * 8.0;\nfloat timed = time * Configurable_Oil_Spill1525321525720_28_speed;\nfloat q = fbm(p - timed * 0.1);\nvec2 r = vec2(fbm(p + q + timed * 0.7 - p.x - p.y), fbm(p + q - timed * 0.4));\nvec3 c = mix(color1, color2, fbm(p + r)) + mix(color3, color4, r.x) - mix(c5, c6, r.y);\nConfigurable_Oil_Spill1525321525720_28_gl_FragColor = vec4(c * cos(1.57 * vUv.y), 1.0);\nreturn Configurable_Oil_Spill1525321525720_28_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = (Big_Wiggles1525321525655_25_main() + Configurable_Oil_Spill1525321525720_28_main());}\n";
  var vertex$9 = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform float scale;\nuniform float displacement;\nuniform float time;\nuniform float Big_Wiggles1525321525655_25_speed;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying float vNoise;\nvec3 mod289(vec3 x) \n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x) \n{\nreturn x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x) \n{\nreturn mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r) \n{\nreturn 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t) \n{\nreturn t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\nfloat cnoise(vec3 P) \n{\nvec3 Pi0 = floor(P);\nvec3 Pi1 = Pi0 + vec3(1.0);\nPi0 = mod289(Pi0);\nPi1 = mod289(Pi1);\nvec3 Pf0 = fract(P);\nvec3 Pf1 = Pf0 - vec3(1.0);\nvec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\nvec4 iy = vec4(Pi0.yy, Pi1.yy);\nvec4 iz0 = Pi0.zzzz;\nvec4 iz1 = Pi1.zzzz;\nvec4 ixy = permute(permute(ix) + iy);\nvec4 ixy0 = permute(ixy + iz0);\nvec4 ixy1 = permute(ixy + iz1);\nvec4 gx0 = ixy0 * (1.0 / 7.0);\nvec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\ngx0 = fract(gx0);\nvec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\nvec4 sz0 = step(gz0, vec4(0.0));\ngx0 -= sz0 * (step(0.0, gx0) - 0.5);\ngy0 -= sz0 * (step(0.0, gy0) - 0.5);\nvec4 gx1 = ixy1 * (1.0 / 7.0);\nvec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\ngx1 = fract(gx1);\nvec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\nvec4 sz1 = step(gz1, vec4(0.0));\ngx1 -= sz1 * (step(0.0, gx1) - 0.5);\ngy1 -= sz1 * (step(0.0, gy1) - 0.5);\nvec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\nvec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\nvec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\nvec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\nvec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\nvec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\nvec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\nvec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\nvec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\ng000 *= norm0.x;\ng010 *= norm0.y;\ng100 *= norm0.z;\ng110 *= norm0.w;\nvec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\ng001 *= norm1.x;\ng011 *= norm1.y;\ng101 *= norm1.z;\ng111 *= norm1.w;\nfloat n000 = dot(g000, Pf0);\nfloat n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\nfloat n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\nfloat n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\nfloat n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\nfloat n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\nfloat n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\nfloat n111 = dot(g111, Pf1);\nvec3 fade_xyz = fade(Pf0);\nvec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\nvec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\nfloat n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\nreturn 2.2 * n_xyz;\n}\nvarying vec2 vUv;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvec4 Big_Wiggles1525321525655_25_main() \n{\nvec4 Big_Wiggles1525321525655_25_gl_Position = vec4(0.0);\nvNoise = cnoise(normalize(position) * scale + (time * Big_Wiggles1525321525655_25_speed));\nvec3 pos = position + normal * vNoise * vec3(displacement);\nBig_Wiggles1525321525655_25_gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\nreturn Big_Wiggles1525321525655_25_gl_Position *= 1.0;\n}\nvec4 Configurable_Oil_Spill1525321525720_28_main() \n{\nvec4 Configurable_Oil_Spill1525321525720_28_gl_Position = vec4(0.0);\nvUv = uv;\nvPosition = position;\nvNormal = normal;\nConfigurable_Oil_Spill1525321525720_28_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Configurable_Oil_Spill1525321525720_28_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Big_Wiggles1525321525655_25_main() + Configurable_Oil_Spill1525321525720_28_main();}\n";
  var uniforms$9 = {
  	scale: {
  		value: ".8",
  		type: "f",
  		glslType: "float"
  	},
  	displacement: {
  		value: ".5",
  		type: "f",
  		glslType: "float"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	Big_Wiggles1525321525655_25_speed: {
  		value: ".3",
  		type: "f",
  		glslType: "float"
  	},
  	color: {
  		value: {
  			r: ".3",
  			g: 0,
  			b: 0
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	color1: {
  		value: {
  			r: ".4",
  			g: ".1",
  			b: ".2"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	color2: {
  		value: {
  			r: ".5",
  			g: "1",
  			b: ".5"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	color3: {
  		value: {
  			r: ".2",
  			g: ".9",
  			b: 0
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	color4: {
  		value: {
  			r: "1.1",
  			g: "1.1",
  			b: "2"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Configurable_Oil_Spill1525321525720_28_speed: {
  		value: ".4",
  		type: "f",
  		glslType: "float"
  	}
  };
  var url$9 = "http://shaderfrog.com/app/view/3060";
  var user$9 = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Goo_Shader = {
  	id: id$9,
  	name: name$9,
  	fragment: fragment$9,
  	vertex: vertex$9,
  	uniforms: uniforms$9,
  	url: url$9,
  	user: user$9
  };

  var id$a = 3055;
  var name$a = "Psycho Shader";
  var fragment$a = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nuniform vec2 Randomise_Fractal;\nuniform float NUM_SIDES;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec2 vUv2;\nconst float PI = 3.14159265359;\nfloat KA = PI / NUM_SIDES;\nvoid koleidoscope(inout vec2 uv) \n{\nfloat angle = atan(uv.y, uv.x);\nangle = mod(angle, 2.0 * KA);\nangle = abs(angle - KA);\nangle += 0.1 * time;\nfloat d = length(uv);\nuv = d * vec2(cos(angle), sin(angle));\n}\nvoid smallKoleidoscope(inout vec2 uv) \n{\nfloat angle = abs(mod(atan(uv.y, uv.x), 2.0 * KA) - KA) + 0.1 * time;\nuv = length(uv) * vec2(cos(angle), sin(angle));\n}\nvec4 Kaleidoscope_Fractal_Shader1551694817060_1634_main() \n{\nvec4 Kaleidoscope_Fractal_Shader1551694817060_1634_gl_FragColor = vec4(0.0);\nvec2 uv = 12.0 * (2.0 * vUv.xy - 1.0);\nsmallKoleidoscope(uv);\nvec3 p = vec3(uv, Randomise_Fractal.x);\nfor (int i = 0;\n i < 44; i++) p.xzy = vec3(1.3, 0.999, 0.678) * abs((abs(p) / dot(p, p) - vec3(1.0, 1.02, Randomise_Fractal.y * 0.4)));\nKaleidoscope_Fractal_Shader1551694817060_1634_gl_FragColor = vec4(p, 1.0);\nreturn Kaleidoscope_Fractal_Shader1551694817060_1634_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = Kaleidoscope_Fractal_Shader1551694817060_1634_main();}\n";
  var vertex$a = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec2 vUv2;\nvec4 Kaleidoscope_Fractal_Shader1551694817060_1634_main() \n{\nvec4 Kaleidoscope_Fractal_Shader1551694817060_1634_gl_Position = vec4(0.0);\nvNormal = normal;\nvUv = uv;\nvUv2 = uv2;\nvPosition = position;\nKaleidoscope_Fractal_Shader1551694817060_1634_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Kaleidoscope_Fractal_Shader1551694817060_1634_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Kaleidoscope_Fractal_Shader1551694817060_1634_main();}\n";
  var uniforms$a = {
  	cameraPosition: {
  		type: "v3",
  		glslType: "vec3"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	Randomise_Fractal: {
  		value: {
  			x: 0.5076923076923077,
  			y: 0.7076923076923077
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	NUM_SIDES: {
  		value: "12",
  		type: "f",
  		glslType: "float"
  	}
  };
  var url$a = "http://shaderfrog.com/app/view/3055";
  var user$a = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Psycho_Shader = {
  	id: id$a,
  	name: name$a,
  	fragment: fragment$a,
  	vertex: vertex$a,
  	uniforms: uniforms$a,
  	url: url$a,
  	user: user$a
  };

  var id$b = 3301;
  var name$b = "Ova Shader";
  var fragment$b = "precision highp float;\nprecision highp int;\nuniform float time;\nuniform vec3 color1;\nuniform vec3 color2;\nvarying vec3 vPosition;\nvarying float vJitter;\nvec3 permute(vec3 x) \n{\nreturn mod((34.0 * x + 1.0) * x, 289.0);\n}\nvec3 dist(vec3 x, vec3 y, vec3 z) \n{\nreturn x * x + y * y + z * z;\n}\nvec2 worley(vec3 P, float jitter) \n{\nfloat K = 0.142857142857;\nfloat Ko = 0.428571428571;\nfloat K2 = 0.020408163265306;\nfloat Kz = 0.166666666667;\nfloat Kzo = 0.416666666667;\nvec3 Pi = mod(floor(P), 289.0);\nvec3 Pf = fract(P) - 0.5;\nvec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);\nvec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);\nvec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);\nvec3 p = permute(Pi.x + vec3(-1.0, 0.0, 1.0));\nvec3 p1 = permute(p + Pi.y - 1.0);\nvec3 p2 = permute(p + Pi.y);\nvec3 p3 = permute(p + Pi.y + 1.0);\nvec3 p11 = permute(p1 + Pi.z - 1.0);\nvec3 p12 = permute(p1 + Pi.z);\nvec3 p13 = permute(p1 + Pi.z + 1.0);\nvec3 p21 = permute(p2 + Pi.z - 1.0);\nvec3 p22 = permute(p2 + Pi.z);\nvec3 p23 = permute(p2 + Pi.z + 1.0);\nvec3 p31 = permute(p3 + Pi.z - 1.0);\nvec3 p32 = permute(p3 + Pi.z);\nvec3 p33 = permute(p3 + Pi.z + 1.0);\nvec3 ox11 = fract(p11 * K) - Ko;\nvec3 oy11 = mod(floor(p11 * K), 7.0) * K - Ko;\nvec3 oz11 = floor(p11 * K2) * Kz - Kzo;\nvec3 ox12 = fract(p12 * K) - Ko;\nvec3 oy12 = mod(floor(p12 * K), 7.0) * K - Ko;\nvec3 oz12 = floor(p12 * K2) * Kz - Kzo;\nvec3 ox13 = fract(p13 * K) - Ko;\nvec3 oy13 = mod(floor(p13 * K), 7.0) * K - Ko;\nvec3 oz13 = floor(p13 * K2) * Kz - Kzo;\nvec3 ox21 = fract(p21 * K) - Ko;\nvec3 oy21 = mod(floor(p21 * K), 7.0) * K - Ko;\nvec3 oz21 = floor(p21 * K2) * Kz - Kzo;\nvec3 ox22 = fract(p22 * K) - Ko;\nvec3 oy22 = mod(floor(p22 * K), 7.0) * K - Ko;\nvec3 oz22 = floor(p22 * K2) * Kz - Kzo;\nvec3 ox23 = fract(p23 * K) - Ko;\nvec3 oy23 = mod(floor(p23 * K), 7.0) * K - Ko;\nvec3 oz23 = floor(p23 * K2) * Kz - Kzo;\nvec3 ox31 = fract(p31 * K) - Ko;\nvec3 oy31 = mod(floor(p31 * K), 7.0) * K - Ko;\nvec3 oz31 = floor(p31 * K2) * Kz - Kzo;\nvec3 ox32 = fract(p32 * K) - Ko;\nvec3 oy32 = mod(floor(p32 * K), 7.0) * K - Ko;\nvec3 oz32 = floor(p32 * K2) * Kz - Kzo;\nvec3 ox33 = fract(p33 * K) - Ko;\nvec3 oy33 = mod(floor(p33 * K), 7.0) * K - Ko;\nvec3 oz33 = floor(p33 * K2) * Kz - Kzo;\nvec3 dx11 = Pfx + jitter * ox11;\nvec3 dy11 = Pfy.x + jitter * oy11;\nvec3 dz11 = Pfz.x + jitter * oz11;\nvec3 dx12 = Pfx + jitter * ox12;\nvec3 dy12 = Pfy.x + jitter * oy12;\nvec3 dz12 = Pfz.y + jitter * oz12;\nvec3 dx13 = Pfx + jitter * ox13;\nvec3 dy13 = Pfy.x + jitter * oy13;\nvec3 dz13 = Pfz.z + jitter * oz13;\nvec3 dx21 = Pfx + jitter * ox21;\nvec3 dy21 = Pfy.y + jitter * oy21;\nvec3 dz21 = Pfz.x + jitter * oz21;\nvec3 dx22 = Pfx + jitter * ox22;\nvec3 dy22 = Pfy.y + jitter * oy22;\nvec3 dz22 = Pfz.y + jitter * oz22;\nvec3 dx23 = Pfx + jitter * ox23;\nvec3 dy23 = Pfy.y + jitter * oy23;\nvec3 dz23 = Pfz.z + jitter * oz23;\nvec3 dx31 = Pfx + jitter * ox31;\nvec3 dy31 = Pfy.z + jitter * oy31;\nvec3 dz31 = Pfz.x + jitter * oz31;\nvec3 dx32 = Pfx + jitter * ox32;\nvec3 dy32 = Pfy.z + jitter * oy32;\nvec3 dz32 = Pfz.y + jitter * oz32;\nvec3 dx33 = Pfx + jitter * ox33;\nvec3 dy33 = Pfy.z + jitter * oy33;\nvec3 dz33 = Pfz.z + jitter * oz33;\nvec3 d11 = dist(dx11, dy11, dz11);\nvec3 d12 = dist(dx12, dy12, dz12);\nvec3 d13 = dist(dx13, dy13, dz13);\nvec3 d21 = dist(dx21, dy21, dz21);\nvec3 d22 = dist(dx22, dy22, dz22);\nvec3 d23 = dist(dx23, dy23, dz23);\nvec3 d31 = dist(dx31, dy31, dz31);\nvec3 d32 = dist(dx32, dy32, dz32);\nvec3 d33 = dist(dx33, dy33, dz33);\nvec3 d1a = min(d11, d12);\nd12 = max(d11, d12);\nd11 = min(d1a, d13);\nd13 = max(d1a, d13);\nd12 = min(d12, d13);\nvec3 d2a = min(d21, d22);\nd22 = max(d21, d22);\nd21 = min(d2a, d23);\nd23 = max(d2a, d23);\nd22 = min(d22, d23);\nvec3 d3a = min(d31, d32);\nd32 = max(d31, d32);\nd31 = min(d3a, d33);\nd33 = max(d3a, d33);\nd32 = min(d32, d33);\nvec3 da = min(d11, d21);\nd21 = max(d11, d21);\nd11 = min(da, d31);\nd31 = max(da, d31);\nd11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;\nd11.xz = (d11.x < d11.z) ? d11.xz : d11.zx;\nd12 = min(d12, d21);\nd12 = min(d12, d22);\nd12 = min(d12, d31);\nd12 = min(d12, d32);\nd11.yz = min(d11.yz, d12.xy);\nd11.y = min(d11.y, d12.z);\nd11.y = min(d11.y, d11.z);\nreturn sqrt(d11.xy);\n}\nvec4 Ruby_Mine1553790481262_158_main() \n{\nvec4 Ruby_Mine1553790481262_158_gl_FragColor = vec4(0.0);\nvec2 worl = worley(vPosition, vJitter);\nfloat world = worl.y - worl.x;\nvec3 color = mix(color1, color2, clamp(world * 2.0, 0.0, 1.0));\nRuby_Mine1553790481262_158_gl_FragColor = vec4((color * 0.1) + (color * world), 1.0);\nreturn Ruby_Mine1553790481262_158_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = Ruby_Mine1553790481262_158_main();}\n";
  var vertex$b = "precision highp float;\nprecision highp int;\nuniform float time;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nvarying vec3 vPosition;\nvarying float vJitter;\nvec3 permute(vec3 x) \n{\nreturn mod((34.0 * x + 1.0) * x, 289.0);\n}\nvec3 dist(vec3 x, vec3 y, vec3 z) \n{\nreturn x * x + y * y + z * z;\n}\nvec2 worley(vec3 P, float jitter) \n{\nfloat K = 0.142857142857;\nfloat Ko = 0.428571428571;\nfloat K2 = 0.020408163265306;\nfloat Kz = 0.166666666667;\nfloat Kzo = 0.416666666667;\nvec3 Pi = mod(floor(P), 289.0);\nvec3 Pf = fract(P) - 0.5;\nvec3 Pfx = Pf.x + vec3(1.0, 0.0, -1.0);\nvec3 Pfy = Pf.y + vec3(1.0, 0.0, -1.0);\nvec3 Pfz = Pf.z + vec3(1.0, 0.0, -1.0);\nvec3 p = permute(Pi.x + vec3(-1.0, 0.0, 1.0));\nvec3 p1 = permute(p + Pi.y - 1.0);\nvec3 p2 = permute(p + Pi.y);\nvec3 p3 = permute(p + Pi.y + 1.0);\nvec3 p11 = permute(p1 + Pi.z - 1.0);\nvec3 p12 = permute(p1 + Pi.z);\nvec3 p13 = permute(p1 + Pi.z + 1.0);\nvec3 p21 = permute(p2 + Pi.z - 1.0);\nvec3 p22 = permute(p2 + Pi.z);\nvec3 p23 = permute(p2 + Pi.z + 1.0);\nvec3 p31 = permute(p3 + Pi.z - 1.0);\nvec3 p32 = permute(p3 + Pi.z);\nvec3 p33 = permute(p3 + Pi.z + 1.0);\nvec3 ox11 = fract(p11 * K) - Ko;\nvec3 oy11 = mod(floor(p11 * K), 7.0) * K - Ko;\nvec3 oz11 = floor(p11 * K2) * Kz - Kzo;\nvec3 ox12 = fract(p12 * K) - Ko;\nvec3 oy12 = mod(floor(p12 * K), 7.0) * K - Ko;\nvec3 oz12 = floor(p12 * K2) * Kz - Kzo;\nvec3 ox13 = fract(p13 * K) - Ko;\nvec3 oy13 = mod(floor(p13 * K), 7.0) * K - Ko;\nvec3 oz13 = floor(p13 * K2) * Kz - Kzo;\nvec3 ox21 = fract(p21 * K) - Ko;\nvec3 oy21 = mod(floor(p21 * K), 7.0) * K - Ko;\nvec3 oz21 = floor(p21 * K2) * Kz - Kzo;\nvec3 ox22 = fract(p22 * K) - Ko;\nvec3 oy22 = mod(floor(p22 * K), 7.0) * K - Ko;\nvec3 oz22 = floor(p22 * K2) * Kz - Kzo;\nvec3 ox23 = fract(p23 * K) - Ko;\nvec3 oy23 = mod(floor(p23 * K), 7.0) * K - Ko;\nvec3 oz23 = floor(p23 * K2) * Kz - Kzo;\nvec3 ox31 = fract(p31 * K) - Ko;\nvec3 oy31 = mod(floor(p31 * K), 7.0) * K - Ko;\nvec3 oz31 = floor(p31 * K2) * Kz - Kzo;\nvec3 ox32 = fract(p32 * K) - Ko;\nvec3 oy32 = mod(floor(p32 * K), 7.0) * K - Ko;\nvec3 oz32 = floor(p32 * K2) * Kz - Kzo;\nvec3 ox33 = fract(p33 * K) - Ko;\nvec3 oy33 = mod(floor(p33 * K), 7.0) * K - Ko;\nvec3 oz33 = floor(p33 * K2) * Kz - Kzo;\nvec3 dx11 = Pfx + jitter * ox11;\nvec3 dy11 = Pfy.x + jitter * oy11;\nvec3 dz11 = Pfz.x + jitter * oz11;\nvec3 dx12 = Pfx + jitter * ox12;\nvec3 dy12 = Pfy.x + jitter * oy12;\nvec3 dz12 = Pfz.y + jitter * oz12;\nvec3 dx13 = Pfx + jitter * ox13;\nvec3 dy13 = Pfy.x + jitter * oy13;\nvec3 dz13 = Pfz.z + jitter * oz13;\nvec3 dx21 = Pfx + jitter * ox21;\nvec3 dy21 = Pfy.y + jitter * oy21;\nvec3 dz21 = Pfz.x + jitter * oz21;\nvec3 dx22 = Pfx + jitter * ox22;\nvec3 dy22 = Pfy.y + jitter * oy22;\nvec3 dz22 = Pfz.y + jitter * oz22;\nvec3 dx23 = Pfx + jitter * ox23;\nvec3 dy23 = Pfy.y + jitter * oy23;\nvec3 dz23 = Pfz.z + jitter * oz23;\nvec3 dx31 = Pfx + jitter * ox31;\nvec3 dy31 = Pfy.z + jitter * oy31;\nvec3 dz31 = Pfz.x + jitter * oz31;\nvec3 dx32 = Pfx + jitter * ox32;\nvec3 dy32 = Pfy.z + jitter * oy32;\nvec3 dz32 = Pfz.y + jitter * oz32;\nvec3 dx33 = Pfx + jitter * ox33;\nvec3 dy33 = Pfy.z + jitter * oy33;\nvec3 dz33 = Pfz.z + jitter * oz33;\nvec3 d11 = dist(dx11, dy11, dz11);\nvec3 d12 = dist(dx12, dy12, dz12);\nvec3 d13 = dist(dx13, dy13, dz13);\nvec3 d21 = dist(dx21, dy21, dz21);\nvec3 d22 = dist(dx22, dy22, dz22);\nvec3 d23 = dist(dx23, dy23, dz23);\nvec3 d31 = dist(dx31, dy31, dz31);\nvec3 d32 = dist(dx32, dy32, dz32);\nvec3 d33 = dist(dx33, dy33, dz33);\nvec3 d1a = min(d11, d12);\nd12 = max(d11, d12);\nd11 = min(d1a, d13);\nd13 = max(d1a, d13);\nd12 = min(d12, d13);\nvec3 d2a = min(d21, d22);\nd22 = max(d21, d22);\nd21 = min(d2a, d23);\nd23 = max(d2a, d23);\nd22 = min(d22, d23);\nvec3 d3a = min(d31, d32);\nd32 = max(d31, d32);\nd31 = min(d3a, d33);\nd33 = max(d3a, d33);\nd32 = min(d32, d33);\nvec3 da = min(d11, d21);\nd21 = max(d11, d21);\nd11 = min(da, d31);\nd31 = max(da, d31);\nd11.xy = (d11.x < d11.y) ? d11.xy : d11.yx;\nd11.xz = (d11.x < d11.z) ? d11.xz : d11.zx;\nd12 = min(d12, d21);\nd12 = min(d12, d22);\nd12 = min(d12, d31);\nd12 = min(d12, d32);\nd11.yz = min(d11.yz, d12.xy);\nd11.y = min(d11.y, d12.z);\nd11.y = min(d11.y, d11.z);\nreturn sqrt(d11.xy);\n}\nvec4 Ruby_Mine1553790481262_158_main() \n{\nvec4 Ruby_Mine1553790481262_158_gl_Position = vec4(0.0);\nvJitter = 1.0;\nvPosition = (position * 2.0) + vec3(sin(time), cos(time), cos(time + 3.14));\nvec2 worl = worley(vPosition, vJitter);\nvec3 pos = position - (length(worl) * normal * 0.2);\nRuby_Mine1553790481262_158_gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\nreturn Ruby_Mine1553790481262_158_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Ruby_Mine1553790481262_158_main();}\n";
  var uniforms$b = {
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	color1: {
  		value: {
  			r: 0.95,
  			g: 0.1,
  			b: 0.8
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	color2: {
  		value: {
  			r: 0.7,
  			g: 0.07,
  			b: 0.6
  		},
  		type: "c",
  		glslType: "vec3"
  	}
  };
  var url$b = "http://shaderfrog.com/app/view/3301";
  var user$b = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Ova_Shader = {
  	id: id$b,
  	name: name$b,
  	fragment: fragment$b,
  	vertex: vertex$b,
  	uniforms: uniforms$b,
  	url: url$b,
  	user: user$b
  };

  var id$c = 3345;
  var name$c = "Thruster Shader";
  var fragment$c = "#define TAU 6.28318530718\n#define MAX_ITER 5\n#define tau 6.2831853\n\n#extension GL_OES_standard_derivatives : enable\n\nprecision highp float;\nprecision highp int;\nuniform vec2 Tiling_Caustic1477531952046_152_resolution;\nuniform vec3 backgroundColor;\nuniform vec3 Tiling_Caustic1477531952046_152_color;\nuniform float Tiling_Caustic1477531952046_152_speed;\nuniform float Tiling_Caustic1477531952046_152_brightness;\nuniform float time;\nuniform float contrast;\nuniform float distortion;\nuniform float Noise_Ripples1477531959288_166_speed;\nuniform vec3 Noise_Ripples1477531959288_166_color;\nuniform float Noise_Ripples1477531959288_166_brightness;\nuniform sampler2D noiseImage;\nuniform vec2 Noise_Ripples1477531959288_166_resolution;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\nuniform float highlightIntensity;\nuniform vec3 highlightColor;\nuniform vec3 Wiggly_Improved1477532051339_181_color;\nuniform vec3 Transparent_Glow1477532059126_201_color;\nuniform float Transparent_Glow1477532059126_201_start;\nuniform float Transparent_Glow1477532059126_201_end;\nuniform float Transparent_Glow1477532059126_201_alpha;\nuniform vec3 Glow_Effect1477532183055_216_color;\nuniform float Glow_Effect1477532183055_216_start;\nuniform float Glow_Effect1477532183055_216_end;\nuniform float Glow_Effect1477532183055_216_alpha;\nvarying vec2 Tiling_Caustic1477531952046_152_vUv;\nvarying vec2 Noise_Ripples1477531959288_166_vUv;\nmat2 makem2(in float theta) \n{\nfloat c = cos(theta);\nfloat s = sin(theta);\nreturn mat2(c, -s, s, c);\n}\nfloat noise(in vec2 x) \n{\nreturn texture2D(noiseImage, x * .01).x;\n}\nfloat fbm(in vec2 p) \n{\nfloat z = 2.;\nfloat rz = 0.;\nvec2 bp = p;\nfor (float i = 1.;\n i < 6.0; i++) \n{\nrz += abs((noise(p) - 0.5) * 2.0) / z;\nz = z * 2.;\np = p * 2.;\n}\nreturn rz;\n}\nfloat dualfbm(in vec2 p) \n{\nvec2 p2 = p * distortion;\nvec2 basis = vec2(fbm(p2 - time * Noise_Ripples1477531959288_166_speed * 1.6), fbm(p2 + time * Noise_Ripples1477531959288_166_speed * 1.7));\nbasis = (basis - .5) * .2;\np += basis;\nreturn fbm(p * makem2(time * Noise_Ripples1477531959288_166_speed * 0.2));\n}\nvarying vec3 Wiggly_Improved1477532051339_181_vNormal;\nvarying float light;\nvarying vec3 Transparent_Glow1477532059126_201_fPosition;\nvarying vec3 Transparent_Glow1477532059126_201_fNormal;\nvarying vec3 Glow_Effect1477532183055_216_fPosition;\nvarying vec3 Glow_Effect1477532183055_216_fNormal;\nvec4 Tiling_Caustic1477531952046_152_main() \n{\nvec4 Tiling_Caustic1477531952046_152_gl_FragColor = vec4(0.0);\nvec2 uv = Tiling_Caustic1477531952046_152_vUv * Tiling_Caustic1477531952046_152_resolution;\nvec2 p = mod(uv * TAU, TAU) - 250.0;\nvec2 i = vec2(p);\nfloat c = 1.0;\nfloat inten = 0.005;\nfor (int n = 0;\n n < MAX_ITER; n++) \n{\nfloat t = time * Tiling_Caustic1477531952046_152_speed * (1.0 - (3.5 / float(n + 1)));\ni = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));\nc += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));\n}\nc /= float(MAX_ITER);\nc = 1.17 - pow(c, Tiling_Caustic1477531952046_152_brightness);\nvec3 rgb = vec3(pow(abs(c), 8.0));\nTiling_Caustic1477531952046_152_gl_FragColor = vec4(rgb * Tiling_Caustic1477531952046_152_color + backgroundColor, 1.0);\nreturn Tiling_Caustic1477531952046_152_gl_FragColor *= 1.0;\n}\nvec4 Noise_Ripples1477531959288_166_main() \n{\nvec4 Noise_Ripples1477531959288_166_gl_FragColor = vec4(0.0);\nvec2 p = (Noise_Ripples1477531959288_166_vUv.xy - 0.5) * Noise_Ripples1477531959288_166_resolution;\nfloat rz = dualfbm(p);\nvec3 col = (Noise_Ripples1477531959288_166_color / rz) * Noise_Ripples1477531959288_166_brightness;\ncol = ((col - 0.5) * max(contrast, 0.0)) + 0.5;\nNoise_Ripples1477531959288_166_gl_FragColor = vec4(col, 1.0);\nreturn Noise_Ripples1477531959288_166_gl_FragColor *= 1.0;\n}\nvec4 Wiggly_Improved1477532051339_181_main() \n{\nvec4 Wiggly_Improved1477532051339_181_gl_FragColor = vec4(0.0);\nWiggly_Improved1477532051339_181_gl_FragColor = vec4(clamp(highlightColor * highlightIntensity * light, 0.0, 1.0), 1.0);\nreturn Wiggly_Improved1477532051339_181_gl_FragColor *= 1.0;\n}\nvec4 Transparent_Glow1477532059126_201_main() \n{\nvec4 Transparent_Glow1477532059126_201_gl_FragColor = vec4(0.0);\nvec3 normal = normalize(Transparent_Glow1477532059126_201_fNormal);\nvec3 eye = normalize(-Transparent_Glow1477532059126_201_fPosition.xyz);\nfloat rim = smoothstep(Transparent_Glow1477532059126_201_start, Transparent_Glow1477532059126_201_end, 1.0 - dot(normal, eye));\nfloat value = clamp(rim * Transparent_Glow1477532059126_201_alpha, 0.0, 1.0);\nTransparent_Glow1477532059126_201_gl_FragColor = vec4(Transparent_Glow1477532059126_201_color * value, value);\nreturn Transparent_Glow1477532059126_201_gl_FragColor *= 1.0;\n}\nvec4 Glow_Effect1477532183055_216_main() \n{\nvec4 Glow_Effect1477532183055_216_gl_FragColor = vec4(0.0);\nvec3 normal = normalize(Glow_Effect1477532183055_216_fNormal);\nvec3 eye = normalize(-Glow_Effect1477532183055_216_fPosition.xyz);\nfloat rim = smoothstep(Glow_Effect1477532183055_216_start, Glow_Effect1477532183055_216_end, 1.0 - dot(normal, eye));\nGlow_Effect1477532183055_216_gl_FragColor = vec4(clamp(rim, 0.0, 1.0) * Glow_Effect1477532183055_216_alpha * Glow_Effect1477532183055_216_color, 1.0);\nreturn Glow_Effect1477532183055_216_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = (Tiling_Caustic1477531952046_152_main() + Noise_Ripples1477531959288_166_main() + Wiggly_Improved1477532051339_181_main() + Transparent_Glow1477532059126_201_main() + Glow_Effect1477532183055_216_main());}\n";
  var vertex$c = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nuniform float Wiggly_Improved1477532051339_181_speed;\nuniform float frequency;\nuniform float amplitude;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec3 Tiling_Caustic1477531952046_152_vPosition;\nvarying vec3 Tiling_Caustic1477531952046_152_vNormal;\nvarying vec2 Tiling_Caustic1477531952046_152_vUv;\nvarying vec2 Tiling_Caustic1477531952046_152_vUv2;\nvarying vec3 Noise_Ripples1477531959288_166_vPosition;\nvarying vec3 Noise_Ripples1477531959288_166_vNormal;\nvarying vec2 Noise_Ripples1477531959288_166_vUv;\nvarying vec2 Noise_Ripples1477531959288_166_vUv2;\nvarying vec3 Wiggly_Improved1477532051339_181_vNormal;\nvarying float light;\nvarying vec3 Wiggly_Improved1477532051339_181_vPosition;\nvarying vec3 Transparent_Glow1477532059126_201_fNormal;\nvarying vec3 Transparent_Glow1477532059126_201_fPosition;\nvarying vec3 Glow_Effect1477532183055_216_fNormal;\nvarying vec3 Glow_Effect1477532183055_216_fPosition;\nvec4 Tiling_Caustic1477531952046_152_main() \n{\nvec4 Tiling_Caustic1477531952046_152_gl_Position = vec4(0.0);\nTiling_Caustic1477531952046_152_vNormal = normal;\nTiling_Caustic1477531952046_152_vUv = uv;\nTiling_Caustic1477531952046_152_vUv2 = uv2;\nTiling_Caustic1477531952046_152_vPosition = position;\nTiling_Caustic1477531952046_152_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Tiling_Caustic1477531952046_152_gl_Position *= 1.0;\n}\nvec4 Noise_Ripples1477531959288_166_main() \n{\nvec4 Noise_Ripples1477531959288_166_gl_Position = vec4(0.0);\nNoise_Ripples1477531959288_166_vNormal = normal;\nNoise_Ripples1477531959288_166_vUv = uv;\nNoise_Ripples1477531959288_166_vUv2 = uv2;\nNoise_Ripples1477531959288_166_vPosition = position;\nNoise_Ripples1477531959288_166_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Noise_Ripples1477531959288_166_gl_Position *= 1.0;\n}\nvec4 Wiggly_Improved1477532051339_181_main() \n{\nvec4 Wiggly_Improved1477532051339_181_gl_Position = vec4(0.0);\nvec3 offset = normalize(vec3(0.0) - position) * (amplitude * sin(Wiggly_Improved1477532051339_181_speed * time + position.y * frequency));\nvec3 newPosition = position + vec3(offset.x, 0.0, offset.z);\nlight = amplitude * sin(Wiggly_Improved1477532051339_181_speed * time + 1.0 + position.y * frequency);\nWiggly_Improved1477532051339_181_vPosition = newPosition;\nWiggly_Improved1477532051339_181_gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);\nreturn Wiggly_Improved1477532051339_181_gl_Position *= 1.0;\n}\nvec4 Transparent_Glow1477532059126_201_main() \n{\nvec4 Transparent_Glow1477532059126_201_gl_Position = vec4(0.0);\nTransparent_Glow1477532059126_201_fNormal = normalize(normalMatrix * normal);\nvec4 pos = modelViewMatrix * vec4(position, 1.0);\nTransparent_Glow1477532059126_201_fPosition = pos.xyz;\nTransparent_Glow1477532059126_201_gl_Position = projectionMatrix * pos;\nreturn Transparent_Glow1477532059126_201_gl_Position *= 1.0;\n}\nvec4 Glow_Effect1477532183055_216_main() \n{\nvec4 Glow_Effect1477532183055_216_gl_Position = vec4(0.0);\nGlow_Effect1477532183055_216_fNormal = normalize(normalMatrix * normal);\nvec4 pos = modelViewMatrix * vec4(position, 1.0);\nGlow_Effect1477532183055_216_fPosition = pos.xyz;\nGlow_Effect1477532183055_216_gl_Position = projectionMatrix * pos;\nreturn Glow_Effect1477532183055_216_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Tiling_Caustic1477531952046_152_main() + Noise_Ripples1477531959288_166_main() + Wiggly_Improved1477532051339_181_main() + Transparent_Glow1477532059126_201_main() + Glow_Effect1477532183055_216_main();}\n";
  var uniforms$c = {
  	cameraPosition: {
  		type: "v3",
  		glslType: "vec3"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	backgroundColor: {
  		value: {
  			r: "0",
  			g: "0",
  			b: "0"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Tiling_Caustic1477531952046_152_resolution: {
  		value: {
  			x: 1,
  			y: 1
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	Tiling_Caustic1477531952046_152_color: {
  		value: {
  			r: 1,
  			g: 1,
  			b: 1
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Tiling_Caustic1477531952046_152_speed: {
  		value: "0.5",
  		type: "f",
  		glslType: "float"
  	},
  	Tiling_Caustic1477531952046_152_brightness: {
  		value: "1.5",
  		type: "f",
  		glslType: "float"
  	},
  	noiseImage: {
  		value: null,
  		type: "t",
  		glslType: "sampler2D"
  	},
  	distortion: {
  		value: "2",
  		type: "f",
  		glslType: "float"
  	},
  	contrast: {
  		value: "1.5",
  		type: "f",
  		glslType: "float"
  	},
  	Noise_Ripples1477531959288_166_speed: {
  		value: "0.1",
  		type: "f",
  		glslType: "float"
  	},
  	Noise_Ripples1477531959288_166_color: {
  		value: {
  			r: 1,
  			g: 0.2823529411764706,
  			b: 0.4823529411764706
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Noise_Ripples1477531959288_166_brightness: {
  		value: "0.1",
  		type: "f",
  		glslType: "float"
  	},
  	Noise_Ripples1477531959288_166_resolution: {
  		value: {
  			x: "2",
  			y: "2"
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	amplitude: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	},
  	frequency: {
  		value: "20",
  		type: "f",
  		glslType: "float"
  	},
  	highlightIntensity: {
  		value: "0.4",
  		type: "f",
  		glslType: "float"
  	},
  	highlightColor: {
  		value: {
  			r: 1,
  			g: 0.5450980392156862,
  			b: 0.23529411764705882
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Wiggly_Improved1477532051339_181_color: {
  		value: {
  			r: 0,
  			g: 0,
  			b: 0
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Wiggly_Improved1477532051339_181_speed: {
  		value: "12",
  		type: "f",
  		glslType: "float"
  	},
  	Transparent_Glow1477532059126_201_color: {
  		value: {
  			r: 1,
  			g: 0.5294117647058824,
  			b: 0.8156862745098039
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Transparent_Glow1477532059126_201_start: {
  		value: "0.54674743",
  		type: "f",
  		glslType: "float"
  	},
  	Transparent_Glow1477532059126_201_end: {
  		value: "0.44399246",
  		type: "f",
  		glslType: "float"
  	},
  	Transparent_Glow1477532059126_201_alpha: {
  		value: "0.5",
  		type: "f",
  		glslType: "float"
  	},
  	Glow_Effect1477532183055_216_color: {
  		value: {
  			r: "1",
  			g: "1",
  			b: "1"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	Glow_Effect1477532183055_216_start: {
  		value: "0",
  		type: "f",
  		glslType: "float"
  	},
  	Glow_Effect1477532183055_216_end: {
  		value: "1.9",
  		type: "f",
  		glslType: "float"
  	},
  	Glow_Effect1477532183055_216_alpha: {
  		value: "1",
  		type: "f",
  		glslType: "float"
  	}
  };
  var url$c = "http://shaderfrog.com/app/view/3345";
  var user$c = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Thruster_Shader = {
  	id: id$c,
  	name: name$c,
  	fragment: fragment$c,
  	vertex: vertex$c,
  	uniforms: uniforms$c,
  	url: url$c,
  	user: user$c
  };

  var id$d = 3369;
  var name$d = "Flowing Circles";
  var fragment$d = "precision highp float;\nprecision highp int;\nuniform vec2 resolution;\nuniform float time;\nuniform float speed;\nuniform float baseRadius;\nuniform float colorVariation;\nuniform float brightnessVariation;\nuniform vec3 backgroundColor;\nuniform float variation;\nvarying vec2 vUv;\nvec3 n(vec2 x, float t) \n{\nvec3 v = floor(vec3(x, t));\nvec3 u = vec3(mod(v.xy, variation), v.z);\nvec3 c = fract(u.xyz * (vec3(0.16462, 0.84787, 0.98273) + u.xyz * vec3(0.24808, 0.75905, 0.13898) + u.yzx * vec3(0.31517, 0.62703, 0.26063) + u.zxy * vec3(0.47127, 0.58568, 0.37244)) + u.yzx * (vec3(0.35425, 0.65187, 0.12423) + u.yzx * vec3(0.95238, 0.93187, 0.95213) + u.zxy * vec3(0.31526, 0.62512, 0.71837)) + u.zxy * (vec3(0.95213, 0.13841, 0.16479) + u.zxy * vec3(0.47626, 0.69257, 0.19738)));\nreturn v + c;\n}\nvec3 col(vec2 x, float t) \n{\nreturn vec3(0.5 + max(brightnessVariation * cos(x.y * x.x), 0.0)) + clamp(colorVariation * cos(fract(vec3(x, t)) * 371.0241), vec3(-0.4), vec3(1.0));\n}\nvec2 idx(vec2 x) \n{\nreturn floor(fract(x * 29.0) * 3.0) - vec2(1.0);\n}\nfloat circle(vec2 x, vec2 c, float r) \n{\nreturn max(0.0, 1.0 - dot(x - c, x - c) / (r * r));\n}\nvec4 Fluid_Circles1551693972791_443_main() \n{\nvec4 Fluid_Circles1551693972791_443_gl_FragColor = vec4(0.0);\nvec2 x = vUv * resolution;\nfloat t = time * speed;\nvec4 c = vec4(vec3(0.0), 0.1);\nfor (int N = 0;\n N < 3; N++) \n{\nfor (int k = -1;\n k <= 0; k++) \n{\nfor (int i = -1;\n i <= 1; i++) \n{\nfor (int j = -1;\n j <= 1; j++) \n{\nvec2 X = x + vec2(j, i);\nfloat t = t + float(N) * 38.0;\nfloat T = t + float(k);\nvec3 a = n(X, T);\nvec2 o = idx(a.xy);\nvec3 b = n(X + o, T + 1.0);\nvec2 m = mix(a.xy, b.xy, (t - a.z) / (b.z - a.z));\nfloat r = baseRadius * sin(3.1415927 * clamp((t - a.z) / (b.z - a.z), 0.0, 1.0));\nif (length(a.xy - b.xy) / (b.z - a.z) > 2.0) \n{\nr = 0.0;\n}\n c += vec4(col(a.xy, a.z), 1.0) * circle(x, m, r);\n}\n}\n}\n}\nFluid_Circles1551693972791_443_gl_FragColor = vec4(c.rgb / max(1e-5, c.w) + backgroundColor, 1.0);\nreturn Fluid_Circles1551693972791_443_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = Fluid_Circles1551693972791_443_main();}\n";
  var vertex$d = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec2 vUv2;\nvec4 Fluid_Circles1551693972791_443_main() \n{\nvec4 Fluid_Circles1551693972791_443_gl_Position = vec4(0.0);\nvNormal = normal;\nvUv = uv;\nvUv2 = uv2;\nvPosition = position;\nFluid_Circles1551693972791_443_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Fluid_Circles1551693972791_443_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Fluid_Circles1551693972791_443_main();}\n";
  var uniforms$d = {
  	cameraPosition: {
  		type: "v3",
  		glslType: "vec3"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	resolution: {
  		value: {
  			x: "8",
  			y: "9"
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	speed: {
  		value: ".2",
  		type: "f",
  		glslType: "float"
  	},
  	baseRadius: {
  		value: ".2",
  		type: "f",
  		glslType: "float"
  	},
  	backgroundColor: {
  		value: {
  			r: 0,
  			g: ".",
  			b: "0.9"
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	brightnessVariation: {
  		value: "0",
  		type: "f",
  		glslType: "float"
  	},
  	colorVariation: {
  		value: "0.99",
  		type: "f",
  		glslType: "float"
  	},
  	variation: {
  		value: "50",
  		type: "f",
  		glslType: "float"
  	}
  };
  var url$d = "http://shaderfrog.com/app/view/3369";
  var user$d = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var Flowing_Circles_Shader = {
  	id: id$d,
  	name: name$d,
  	fragment: fragment$d,
  	vertex: vertex$d,
  	uniforms: uniforms$d,
  	url: url$d,
  	user: user$d
  };

  var id$e = 3373;
  var name$e = "Electric Shader";
  var fragment$e = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nuniform float opacity;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec2 vUv2;\nfloat Hash(vec2 p) \n{\nvec3 p2 = vec3(p.xy, 1.0);\nreturn fract(sin(dot(p2, vec3(37.1, 61.7, 12.4))) * 3758.5453123);\n}\nfloat noise(in vec2 p) \n{\nvec2 i = floor(p);\nvec2 f = fract(p);\nf *= f * (3.0 - 2.0 * f);\nreturn mix(mix(Hash(i + vec2(0., 0.)), Hash(i + vec2(1., 0.)), f.x), mix(Hash(i + vec2(0., 1.)), Hash(i + vec2(1., 1.)), f.x), f.y);\n}\nfloat fbm(vec2 p) \n{\nfloat v = 0.0;\nv += noise(p * 1.0) * .5;\nv += noise(p * 2.) * .25;\nv += noise(p * 4.) * .125;\nreturn v * 1.0;\n}\nconst float PI = acos(0.0) * 2.0;\nvec2 RadialCoords(vec3 a_coords) \n{\nvec3 a_coords_n = normalize(a_coords);\nfloat lon = atan(a_coords_n.z, a_coords_n.x);\nfloat lat = acos(a_coords_n.y);\nvec2 sphereCoords = vec2(lon, lat) / PI;\nreturn vec2(fract(sphereCoords.x * 0.5 + 0.5), 1.0 - sphereCoords.y);\n}\nvec4 Lightning_main() \n{\nvec4 Lightning_gl_FragColor = vec4(0.0);\nvec2 uv = RadialCoords(vPosition * 1.0) * 2.0 - 1.0;\nvec3 finalColor = vec3(0.0);\nconst float strength = 0.01;\nconst float dx = 0.1;\nfloat t = 0.0;\nfor (int k = -4;\n k < 14; ++k) \n{\nvec2 thisUV = uv;\nthisUV.x -= dx * float(k);\nthisUV.y -= float(k);\nt += abs(strength / (thisUV.x + fbm(thisUV + time)));\n}\nfinalColor += t * vec3(0.1, 0.3, 1.0);\nLightning_gl_FragColor = vec4(finalColor, opacity);\nreturn Lightning_gl_FragColor;\n}\nvec4 Electric_Shader1556488915096_215_main() \n{\nvec4 Electric_Shader1556488915096_215_gl_FragColor = vec4(0.0);\nElectric_Shader1556488915096_215_gl_FragColor = Lightning_main();\nreturn Electric_Shader1556488915096_215_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = Electric_Shader1556488915096_215_main();\n if (gl_FragColor.a < 0.5  && gl_FragColor.g <0.5) discard;   }\n";
  var vertex$e = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform float time;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec2 vUv2;\nvec4 Lightning_main() \n{\nvec4 Lightning_gl_Position = vec4(0.0);\nvNormal = normal;\nvUv = uv;\nvUv2 = uv2;\nvPosition = position;\nLightning_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Lightning_gl_Position *= 0.5;\n}\nvec4 Electric_Shader1556488915096_215_main() \n{\nvec4 Electric_Shader1556488915096_215_gl_Position = vec4(0.0);\nElectric_Shader1556488915096_215_gl_Position = Lightning_main();\nreturn Electric_Shader1556488915096_215_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Electric_Shader1556488915096_215_main();}\n";
  var uniforms$e = {
  	cameraPosition: {
  		type: "v3",
  		glslType: "vec3"
  	},
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	opacity: {
  		value: "0.4",
  		type: "f",
  		glslType: "float"
  	}
  };
  var side = 2;
  var url$e = "http://shaderfrog.com/app/view/3373";
  var user$e = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/sirfizx"
  };
  var Electric_Shader = {
  	id: id$e,
  	name: name$e,
  	fragment: fragment$e,
  	vertex: vertex$e,
  	uniforms: uniforms$e,
  	side: side,
  	url: url$e,
  	user: user$e
  };

  var id$f = 3386;
  var name$f = "CS1 Shader";
  var fragment$f = "#define DOWN_SCALE 1.0\n#define MAX_INT_DIGITS 4\n#define NORMAL 0\n#define INVERT 1\n#define UNDERLINE 2\n\nprecision highp float;\nprecision highp int;\nuniform float time;\nuniform vec2 resolution;\nuniform vec3 color;\nuniform vec3 background_color;\nvarying vec2 vUv;\nint TEXT_MODE = NORMAL;\nvec4 ch_spc = vec4(0x000000, 0x000000, 0x000000, 0x000000);\nvec4 ch_exc = vec4(0x003078, 0x787830, 0x300030, 0x300000);\nvec4 ch_quo = vec4(0x006666, 0x662400, 0x000000, 0x000000);\nvec4 ch_hsh = vec4(0x006C6C, 0xFE6C6C, 0x6CFE6C, 0x6C0000);\nvec4 ch_dol = vec4(0x30307C, 0xC0C078, 0x0C0CF8, 0x303000);\nvec4 ch_pct = vec4(0x000000, 0xC4CC18, 0x3060CC, 0x8C0000);\nvec4 ch_amp = vec4(0x0070D8, 0xD870FA, 0xDECCDC, 0x760000);\nvec4 ch_apo = vec4(0x003030, 0x306000, 0x000000, 0x000000);\nvec4 ch_lbr = vec4(0x000C18, 0x306060, 0x603018, 0x0C0000);\nvec4 ch_rbr = vec4(0x006030, 0x180C0C, 0x0C1830, 0x600000);\nvec4 ch_ast = vec4(0x000000, 0x663CFF, 0x3C6600, 0x000000);\nvec4 ch_crs = vec4(0x000000, 0x18187E, 0x181800, 0x000000);\nvec4 ch_com = vec4(0x000000, 0x000000, 0x000038, 0x386000);\nvec4 ch_dsh = vec4(0x000000, 0x0000FE, 0x000000, 0x000000);\nvec4 ch_per = vec4(0x000000, 0x000000, 0x000038, 0x380000);\nvec4 ch_lsl = vec4(0x000002, 0x060C18, 0x3060C0, 0x800000);\nvec4 ch_0 = vec4(0x007CC6, 0xD6D6D6, 0xD6D6C6, 0x7C0000);\nvec4 ch_1 = vec4(0x001030, 0xF03030, 0x303030, 0xFC0000);\nvec4 ch_2 = vec4(0x0078CC, 0xCC0C18, 0x3060CC, 0xFC0000);\nvec4 ch_3 = vec4(0x0078CC, 0x0C0C38, 0x0C0CCC, 0x780000);\nvec4 ch_4 = vec4(0x000C1C, 0x3C6CCC, 0xFE0C0C, 0x1E0000);\nvec4 ch_5 = vec4(0x00FCC0, 0xC0C0F8, 0x0C0CCC, 0x780000);\nvec4 ch_6 = vec4(0x003860, 0xC0C0F8, 0xCCCCCC, 0x780000);\nvec4 ch_7 = vec4(0x00FEC6, 0xC6060C, 0x183030, 0x300000);\nvec4 ch_8 = vec4(0x0078CC, 0xCCEC78, 0xDCCCCC, 0x780000);\nvec4 ch_9 = vec4(0x0078CC, 0xCCCC7C, 0x181830, 0x700000);\nvec4 ch_col = vec4(0x000000, 0x383800, 0x003838, 0x000000);\nvec4 ch_scl = vec4(0x000000, 0x383800, 0x003838, 0x183000);\nvec4 ch_les = vec4(0x000C18, 0x3060C0, 0x603018, 0x0C0000);\nvec4 ch_equ = vec4(0x000000, 0x007E00, 0x7E0000, 0x000000);\nvec4 ch_grt = vec4(0x006030, 0x180C06, 0x0C1830, 0x600000);\nvec4 ch_que = vec4(0x0078CC, 0x0C1830, 0x300030, 0x300000);\nvec4 ch_ats = vec4(0x007CC6, 0xC6DEDE, 0xDEC0C0, 0x7C0000);\nvec4 ch_A = vec4(0x003078, 0xCCCCCC, 0xFCCCCC, 0xCC0000);\nvec4 ch_B = vec4(0x00FC66, 0x66667C, 0x666666, 0xFC0000);\nvec4 ch_C = vec4(0x003C66, 0xC6C0C0, 0xC0C666, 0x3C0000);\nvec4 ch_D = vec4(0x00F86C, 0x666666, 0x66666C, 0xF80000);\nvec4 ch_E = vec4(0x00FE62, 0x60647C, 0x646062, 0xFE0000);\nvec4 ch_F = vec4(0x00FE66, 0x62647C, 0x646060, 0xF00000);\nvec4 ch_G = vec4(0x003C66, 0xC6C0C0, 0xCEC666, 0x3E0000);\nvec4 ch_H = vec4(0x00CCCC, 0xCCCCFC, 0xCCCCCC, 0xCC0000);\nvec4 ch_I = vec4(0x007830, 0x303030, 0x303030, 0x780000);\nvec4 ch_J = vec4(0x001E0C, 0x0C0C0C, 0xCCCCCC, 0x780000);\nvec4 ch_K = vec4(0x00E666, 0x6C6C78, 0x6C6C66, 0xE60000);\nvec4 ch_L = vec4(0x00F060, 0x606060, 0x626666, 0xFE0000);\nvec4 ch_M = vec4(0x00C6EE, 0xFEFED6, 0xC6C6C6, 0xC60000);\nvec4 ch_N = vec4(0x00C6C6, 0xE6F6FE, 0xDECEC6, 0xC60000);\nvec4 ch_O = vec4(0x00386C, 0xC6C6C6, 0xC6C66C, 0x380000);\nvec4 ch_P = vec4(0x00FC66, 0x66667C, 0x606060, 0xF00000);\nvec4 ch_Q = vec4(0x00386C, 0xC6C6C6, 0xCEDE7C, 0x0C1E00);\nvec4 ch_R = vec4(0x00FC66, 0x66667C, 0x6C6666, 0xE60000);\nvec4 ch_S = vec4(0x0078CC, 0xCCC070, 0x18CCCC, 0x780000);\nvec4 ch_T = vec4(0x00FCB4, 0x303030, 0x303030, 0x780000);\nvec4 ch_U = vec4(0x00CCCC, 0xCCCCCC, 0xCCCCCC, 0x780000);\nvec4 ch_V = vec4(0x00CCCC, 0xCCCCCC, 0xCCCC78, 0x300000);\nvec4 ch_W = vec4(0x00C6C6, 0xC6C6D6, 0xD66C6C, 0x6C0000);\nvec4 ch_X = vec4(0x00CCCC, 0xCC7830, 0x78CCCC, 0xCC0000);\nvec4 ch_Y = vec4(0x00CCCC, 0xCCCC78, 0x303030, 0x780000);\nvec4 ch_Z = vec4(0x00FECE, 0x981830, 0x6062C6, 0xFE0000);\nvec4 ch_lsb = vec4(0x003C30, 0x303030, 0x303030, 0x3C0000);\nvec4 ch_rsl = vec4(0x000080, 0xC06030, 0x180C06, 0x020000);\nvec4 ch_rsb = vec4(0x003C0C, 0x0C0C0C, 0x0C0C0C, 0x3C0000);\nvec4 ch_pow = vec4(0x10386C, 0xC60000, 0x000000, 0x000000);\nvec4 ch_usc = vec4(0x000000, 0x000000, 0x000000, 0x00FF00);\nvec4 ch_a = vec4(0x000000, 0x00780C, 0x7CCCCC, 0x760000);\nvec4 ch_b = vec4(0x00E060, 0x607C66, 0x666666, 0xDC0000);\nvec4 ch_c = vec4(0x000000, 0x0078CC, 0xC0C0CC, 0x780000);\nvec4 ch_d = vec4(0x001C0C, 0x0C7CCC, 0xCCCCCC, 0x760000);\nvec4 ch_e = vec4(0x000000, 0x0078CC, 0xFCC0CC, 0x780000);\nvec4 ch_f = vec4(0x00386C, 0x6060F8, 0x606060, 0xF00000);\nvec4 ch_g = vec4(0x000000, 0x0076CC, 0xCCCC7C, 0x0CCC78);\nvec4 ch_h = vec4(0x00E060, 0x606C76, 0x666666, 0xE60000);\nvec4 ch_i = vec4(0x001818, 0x007818, 0x181818, 0x7E0000);\nvec4 ch_j = vec4(0x000C0C, 0x003C0C, 0x0C0C0C, 0xCCCC78);\nvec4 ch_k = vec4(0x00E060, 0x60666C, 0x786C66, 0xE60000);\nvec4 ch_l = vec4(0x007818, 0x181818, 0x181818, 0x7E0000);\nvec4 ch_m = vec4(0x000000, 0x00FCD6, 0xD6D6D6, 0xC60000);\nvec4 ch_n = vec4(0x000000, 0x00F8CC, 0xCCCCCC, 0xCC0000);\nvec4 ch_o = vec4(0x000000, 0x0078CC, 0xCCCCCC, 0x780000);\nvec4 ch_p = vec4(0x000000, 0x00DC66, 0x666666, 0x7C60F0);\nvec4 ch_q = vec4(0x000000, 0x0076CC, 0xCCCCCC, 0x7C0C1E);\nvec4 ch_r = vec4(0x000000, 0x00EC6E, 0x766060, 0xF00000);\nvec4 ch_s = vec4(0x000000, 0x0078CC, 0x6018CC, 0x780000);\nvec4 ch_t = vec4(0x000020, 0x60FC60, 0x60606C, 0x380000);\nvec4 ch_u = vec4(0x000000, 0x00CCCC, 0xCCCCCC, 0x760000);\nvec4 ch_v = vec4(0x000000, 0x00CCCC, 0xCCCC78, 0x300000);\nvec4 ch_w = vec4(0x000000, 0x00C6C6, 0xD6D66C, 0x6C0000);\nvec4 ch_x = vec4(0x000000, 0x00C66C, 0x38386C, 0xC60000);\nvec4 ch_y = vec4(0x000000, 0x006666, 0x66663C, 0x0C18F0);\nvec4 ch_z = vec4(0x000000, 0x00FC8C, 0x1860C4, 0xFC0000);\nvec4 ch_lpa = vec4(0x001C30, 0x3060C0, 0x603030, 0x1C0000);\nvec4 ch_bar = vec4(0x001818, 0x181800, 0x181818, 0x180000);\nvec4 ch_rpa = vec4(0x00E030, 0x30180C, 0x183030, 0xE00000);\nvec4 ch_tid = vec4(0x0073DA, 0xCE0000, 0x000000, 0x000000);\nvec4 ch_lar = vec4(0x000000, 0x10386C, 0xC6C6FE, 0x000000);\nvec2 res = vec2(1.0) / 1.0;\nvec2 print_pos = vec2(0.0);\nfloat extract_bit(float n, float b) \n{\nb = clamp(b, -1.0, 24.0);\nreturn floor(mod(floor(n / pow(2.0, floor(b))), 2.0));\n}\nfloat sprite(vec4 spr, vec2 size, vec2 uv) \n{\nuv = floor(uv);\nfloat bit = (size.x - uv.x - 1.0) + uv.y * size.x;\nbool bounds = all(greaterThanEqual(uv, vec2(0))) && all(lessThan(uv, size));\nfloat pixels = 0.0;\npixels += extract_bit(spr.x, bit - 72.0);\npixels += extract_bit(spr.y, bit - 48.0);\npixels += extract_bit(spr.z, bit - 24.0);\npixels += extract_bit(spr.w, bit - 00.0);\nreturn bounds ? pixels : 0.0;\n}\nfloat char(vec4 ch, vec2 uv) \n{\nif (TEXT_MODE == INVERT) \n{\nch = pow(2.0, 24.0) - 1.0 - ch;\n}\n if (TEXT_MODE == UNDERLINE) \n{\nch.w = floor(ch.w / 256.0) * 256.0 + 255.0;\n}\n float px = sprite(ch, vec2(8, 12), uv - print_pos);\nprint_pos.x += 8.;\nreturn px;\n}\nvec4 get_digit(float d) \n{\nd = floor(d);\nif (d == 0.0) return ch_0;\n if (d == 1.0) return ch_1;\n if (d == 2.0) return ch_2;\n if (d == 3.0) return ch_3;\n if (d == 4.0) return ch_4;\n if (d == 5.0) return ch_5;\n if (d == 6.0) return ch_6;\n if (d == 7.0) return ch_7;\n if (d == 8.0) return ch_8;\n if (d == 9.0) return ch_9;\n return vec4(0.0);\n}\nfloat print_number(float number, vec2 uv) \n{\nfloat result = 0.0;\nfor (int i = 3;\n i >= -1; i--) \n{\nfloat digit = mod(number / pow(10.0, float(i)), 10.0);\nif (i == -1) \n{\nresult += char(ch_per, uv);\n}\n if (abs(number) > pow(10.0, float(i)) || i == 0) \n{\nresult += char(get_digit(digit), uv);\n}\n }\nreturn result;\n}\nfloat print_integer(float number, int zeros, vec2 uv) \n{\nfloat result = 0.0;\nfor (int i = MAX_INT_DIGITS;\n i >= 0; i--) \n{\nfloat digit = mod(number / pow(10.0, float(i)), 10.0);\nif (abs(number) > pow(10.0, float(i)) || zeros > i || i == 0) \n{\nresult += char(get_digit(digit), uv);\n}\n }\nreturn result;\n}\nfloat text(vec2 uv) \n{\nfloat col = 0.0;\nvec2 center = res / 2.0;\nprint_pos = floor(center - vec2((17.0 * 8.), (1.0 * 12.)) / 2.0);\ncol += char(ch_C, uv);\ncol += char(ch_S, uv);\ncol += char(ch_1, uv);\nTEXT_MODE = INVERT;\ncol += char(ch_G, uv);\ncol += char(ch_a, uv);\ncol += char(ch_m, uv);\ncol += char(ch_e, uv);\nTEXT_MODE = NORMAL;\ncol += char(ch_E, uv);\ncol += char(ch_n, uv);\ncol += char(ch_g, uv);\ncol += char(ch_i, uv);\ncol += char(ch_n, uv);\ncol += char(ch_e, uv);\ncol += char(ch_exc, uv);\nreturn col;\n}\nvec4 Text_main() \n{\nvec4 Text_gl_FragColor = vec4(0.0);\nvec2 uv = (vUv.xy - 0.5) * resolution;\nvec2 duv = floor(uv.xy / 1.0);\nfloat pixel = text(duv);\nif (pixel > 0.0) \n{\nText_gl_FragColor = vec4(vec3(pixel) * color, 1.0);\nreturn Text_gl_FragColor *= 1.0;\n}\n else \n{\ndiscard;\n}\n}\nvec4 Text_Only_Shader1556670324252_90_main() \n{\nvec4 Text_Only_Shader1556670324252_90_gl_FragColor = vec4(0.0);\nText_Only_Shader1556670324252_90_gl_FragColor = Text_main();\nreturn Text_Only_Shader1556670324252_90_gl_FragColor *= 1.0;\n}\nvoid main() \n{\ngl_FragColor = Text_Only_Shader1556670324252_90_main();}\n";
  var vertex$f = "precision highp float;\nprecision highp int;\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\nvarying vec2 vUv;\nvec4 Hello_ShaderFrog1551692717683_383_main() \n{\nvec4 Hello_ShaderFrog1551692717683_383_gl_Position = vec4(0.0);\nvUv = uv;\nHello_ShaderFrog1551692717683_383_gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\nreturn Hello_ShaderFrog1551692717683_383_gl_Position *= 1.0;\n}\nvec4 Text_Only_Shader1556670324252_90_main() \n{\nvec4 Text_Only_Shader1556670324252_90_gl_Position = vec4(0.0);\nText_Only_Shader1556670324252_90_gl_Position = Hello_ShaderFrog1551692717683_383_main();\nreturn Text_Only_Shader1556670324252_90_gl_Position *= 1.0;\n}\nvoid main() \n{\ngl_Position = Text_Only_Shader1556670324252_90_main();}\n";
  var uniforms$f = {
  	time: {
  		type: "f",
  		glslType: "float"
  	},
  	color: {
  		value: {
  			r: 0.7176470588235294,
  			g: 0,
  			b: 0
  		},
  		type: "c",
  		glslType: "vec3"
  	},
  	resolution: {
  		value: {
  			x: "200",
  			y: "80"
  		},
  		type: "v2",
  		glslType: "vec2"
  	},
  	background_color: {
  		value: {
  			r: 0,
  			g: 0.8156862745098039,
  			b: 1
  		},
  		type: "c",
  		glslType: "vec3"
  	}
  };
  var side$1 = 2;
  var url$f = "http://shaderfrog.com/app/view/3386";
  var user$f = {
  	username: "SirFizX",
  	url: "http://shaderfrog.com/app/profile/andrewray"
  };
  var CS1_Shader = {
  	id: id$f,
  	name: name$f,
  	fragment: fragment$f,
  	vertex: vertex$f,
  	uniforms: uniforms$f,
  	side: side$1,
  	url: url$f,
  	user: user$f
  };

  var shaders = {};
  shaders['Water_Body']=Water_Body;
  shaders['Polkadot_Shader']=Polkadot_Shader;
  shaders['Sun_Shader']=Sun_Shader;
  shaders['Jelly_Shader']=Jelly_Shader;
  shaders['Green_Dance_Shader']=Green_Dance_Shader;
  shaders['Cosmic_Shader']=Cosmic_Shader;
  shaders['Cool_Tiles_Shader']=Cool_Tiles_Shader;
  shaders['Disco_Shader']=Disco_Shader;
  shaders['Marching_Ants_Shader']=Marching_Ants_Shader;
  shaders['Goo_Shader']=Goo_Shader;
  shaders['Psycho_Shader']=Psycho_Shader;
  shaders['Ova_Shader']=Ova_Shader;
  shaders['Thruster_Shader']=Thruster_Shader;
  shaders['Flowing_Circles_Shader']=Flowing_Circles_Shader;
  shaders['Electric_Shader']=Electric_Shader;
  shaders['CS1_Shader']=CS1_Shader;

  AFRAME.shaderfrog = shaders;

  function ShaderRuntime() {}

  ShaderRuntime.prototype = {

  mainCamera: null,
  cubeCameras: {},

  reserved: { time: null, cameraPosition: null },

  umap: {
  float: { type: 'f', value: 0 },
  int: { type: 'i', value: 0 },
  vec2: { type: 'v2', value() { return new THREE.Vector2(); } },
  vec3: { type: 'v3', value() { return new THREE.Vector3(); } },
  vec4: { type: 'v4', value() { return new THREE.Vector4(); } },
  samplerCube: { type: 't' },
  sampler2D: { type: 't' }
  },

  getUmap( type ) {
  let value = this.umap[ type ].value;
  return typeof value === 'function' ? value() : value;
  },

  registerCamera( camera ) {

  if( !( camera instanceof THREE.Camera ) ) {
  throw new Error( 'Cannot register a non-camera as a camera!' );
  }

  this.mainCamera = camera;

  },

  registerCubeCamera( name, camera ) {

  if( !camera.renderTarget ) {
  throw new Error( 'Cannot register a non-camera as a camera!' );
  }

  this.cubeCameras[ name ] = camera;

  },

  unregisterCamera( name ) {

  if( name in this.cubeCameras ) {

  delete this.cubeCameras[ name ];
  
  } else if( name === this.mainCamera ) {

  delete this.mainCamera;

  } else {

  throw new Error( 'You never registered camera ' + name );

  }

  },

  updateSource( identifier, config, findBy ) {

  findBy = findBy || 'name';

  if( !this.shaderTypes[ identifier ] ) {
  throw new Error( 'Runtime Error: Cannot update shader ' + identifier + ' because it has not been added.' );
  }

  let newShaderData = this.add( identifier, config ),
  shader, x;

  for( x = 0; shader = this.runningShaders[ x++ ]; ) {
  if( shader[ findBy ] === identifier ) {
  extend( shader.material, omit( newShaderData, 'id' ) );
  shader.material.needsUpdate = true;
  }
  }

  },

  renameShader( oldName, newName ) {

  let x, shader;

  if( !( oldName in this.shaderTypes ) ) {
  throw new Error('Could not rename shader ' + oldName + ' to ' + newName + '. It does not exist.');
  }

  this.shaderTypes[ newName ] = this.shaderTypes[ oldName ];
  delete this.shaderTypes[ oldName ];

  for( x = 0; shader = this.runningShaders[ x++ ]; ) {
  if( shader.name === oldName ) {
  shader.name = newName;
  }
  }

  },

  get( identifier ) {

  let shaderType = this.shaderTypes[ identifier ];

  if( !shaderType.initted ) {

  this.create( identifier );
  }

  return shaderType.material;

  },

  add( shaderName, config ) {

  let newData = clone( config ),
  uniform;
  newData.fragmentShader = config.fragment;
  newData.vertexShader = config.vertex;
  delete newData.fragment;
  delete newData.vertex;

  for( var uniformName in newData.uniforms ) {
  uniform = newData.uniforms[ uniformName ];
  if( uniform.value === null ) {
  newData.uniforms[ uniformName ].value = this.getUmap( uniform.glslType );
  }
  }
  
  if( shaderName in this.shaderTypes ) {
  // maybe not needed? too sleepy, need document
  extend( this.shaderTypes[ shaderName ], newData );
  } else {
  this.shaderTypes[ shaderName ] = newData;
  }

  return newData;

  },

  create( identifier ) {

  let shaderType = this.shaderTypes[ identifier ];

  delete shaderType.id;

  shaderType.material = new THREE.RawShaderMaterial( shaderType );

  this.runningShaders.push( shaderType );

  shaderType.init && shaderType.init( shaderType.material );
  shaderType.material.needsUpdate = true;

  shaderType.initted = true;

  return shaderType.material;

  },

  updateRuntime( identifier, data, findBy ) {

  findBy = findBy || 'name';

  let shader, x, uniformName, uniform;

  // This loop does not appear to be a slowdown culprit
  for( x = 0; shader = this.runningShaders[ x++ ]; ) {
  if( shader[ findBy ] === identifier ) {
  for( uniformName in data.uniforms ) {

  if( uniformName in this.reserved ) {
  continue;
  }

  if( uniformName in shader.material.uniforms ) {

  uniform = data.uniforms[ uniformName ];

  // this is nasty, since the shader serializes
  // CubeCamera model to string. Maybe not update it at
  // all?
  if( uniform.type === 't' && typeof uniform.value === 'string' ) {
  uniform.value = this.cubeCameras[ uniform.value ].renderTarget;
  }

  shader.material.uniforms[ uniformName ].value = data.uniforms[ uniformName ].value;
  }
  }
  }
  }

  },

  // Update global shader uniform values
  updateShaders( time, obj ) {

  let shader, x;

  obj = obj || {};

  for( x = 0; shader = this.runningShaders[ x++ ]; ) {

  for( let uniform in obj.uniforms ) {
  if( uniform in shader.material.uniforms ) {
  shader.material.uniforms[ uniform ].value = obj.uniforms[ uniform ];
  }
  }

  if( 'cameraPosition' in shader.material.uniforms && this.mainCamera ) {

  shader.material.uniforms.cameraPosition.value = this.mainCamera.position.clone();

  }

  if( 'viewMatrix' in shader.material.uniforms && this.mainCamera ) {

  shader.material.uniforms.viewMatrix.value = this.mainCamera.matrixWorldInverse;

  }

  if( 'time' in shader.material.uniforms ) {

  shader.material.uniforms.time.value = time;

  }

  }

  },

  shaderTypes: shaders,

  runningShaders: []

  };

  // Convenience methods so we don't have to include underscore
  function extend() {
  let length = arguments.length,
  obj = arguments[ 0 ];

  if( length < 2 ) {
  return obj;
  }

  for( let index = 1; index < length; index++ ) {
  let source = arguments[ index ],
  keys = Object.keys( source || {} ),
  l = keys.length;
  for( let i = 0; i < l; i++ ) {
  let key = keys[i];
  obj[ key ] = source[ key ];
  }
  }

  return obj;
  }

  function clone( obj ) {
  return extend( {}, obj );
  }

  function omit( obj, ...keys ) {
  let cloned = clone( obj ), x, key;
  for( x = 0; key = keys[ x++ ]; ) {
  delete cloned[ key ];
  }
  return cloned;
  }

  AFRAME.registerSystem('shader-frog', {
init:function(){
  this.frog_runtime = new ShaderRuntime();
  this.clock = new THREE.Clock();
  var self = this;
  
  var scene = document.querySelector('a-scene');
  if (scene.hasLoaded) {
registerCamera().bind(this);} else {
scene.addEventListener('loaded', registerCamera);
  }
  function registerCamera () {
 var camera = document.querySelector("a-scene").systems["camera"];
 if(camera && camera.sceneEl && camera.sceneEl.camera){
   camera = camera.sceneEl.camera;
   self.frog_runtime.registerCamera(camera);
 }
  }
},
tick: function (t) {
  this.frog_runtime.updateShaders( this.clock.getElapsedTime() );
}
  });
  AFRAME.registerComponent('shader-frog',{
schema:{
  name:{type:"string" , default:"Flowing_Circles_Shader"},
  side: {default: 'double', oneOf: ['front', 'back', 'double']},
},
init: function(){
  this.originalMaterial = this.el.getObject3D('mesh').material;
  this.shaderData = shaders[this.data.name];
},
update: function(){
  this.system.frog_runtime.add(this.data.name,this.shaderData);
  var material = this.system.frog_runtime.get(this.data.name);
  if(this.data.side === 'double'){
  material.side = THREE.DoubleSide;
  } else if(this.data.side === 'front'){
  material.side = THREE.FrontSide;
  } else if(this.data.side === 'back'){
  material.side = THREE.BackSide;
  }
  this.el.getObject3D('mesh').material = material;
},
remove: function(){
  this.el.getObject3D('mesh').material = this.originalMaterial;
}
  });

}());
//# sourceMappingURL=aframe-shaderfrog-component.js.map
