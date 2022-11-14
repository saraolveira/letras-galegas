import * as THREE from 'three'
import fragmentShader from './shaders/fragmentShader.glsl.js'
import vertexShader from './shaders/vertexShader.glsl.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const textureLoader = new THREE.TextureLoader()
const rosaliaTexture = textureLoader.load('./textures/rosalia.jpeg')
const castelaoTexture = textureLoader.load('./textures/castelao.jpg')
const pondalTexture = textureLoader.load('./textures/pondal.jpg')
const añonTexture = textureLoader.load('./textures/añon.jpg')
const currosTexture = textureLoader.load('./textures/curros.jpg')
const cuevillasTexture = textureLoader.load('./textures/cuevillas.jpg')
const noriegaTexture = textureLoader.load('./textures/noriega.jpg')
const valladaresTexture = textureLoader.load('./textures/valladares.jpg')
const abenteTexture = textureLoader.load('./textures/abente.jpg')
const lamasTexture = textureLoader.load('./textures/lamas.jpg')
const lagoTexture = textureLoader.load('./textures/lago.jpg')
const viqueiraTexture = textureLoader.load('./textures/viqueira.jpg')
const pintosTexture = textureLoader.load('./textures/pintos.jpg')
const cabanillasTexture = textureLoader.load('./textures/cabanillas.jpg')
const villarTexture = textureLoader.load('./textures/villar.jpg')
const ferreiroTexture = textureLoader.load('./textures/ferreiro.jpg')
const antonioTexture = textureLoader.load('./textures/antonio.jpg')
const alfonsoTexture = textureLoader.load('./textures/alfonso.jpg')
const riscoTexture = textureLoader.load('./textures/risco.jpg')
const amadoTexture = textureLoader.load('./textures/amado.jpg')
const leirasTexture = textureLoader.load('./textures/leiras.jpg')
const cotareloTexture = textureLoader.load('./textures/cotarelo.jpg')
const losadaTexture = textureLoader.load('./textures/losada.jpg')
const iglesiaTexture = textureLoader.load('./textures/iglesia.jpg')
const franciscaTexture = textureLoader.load('./textures/francisca.jpg')
const oteroTexture = textureLoader.load('./textures/otero.jpg')
const emilioTexture = textureLoader.load('./textures/emilio.jpg')
const pimentelTexture = textureLoader.load('./textures/pimentel.jpg')
const cunqueiroTexture = textureLoader.load('./textures/cunqueiro.jpg')
const bouzaTexture = textureLoader.load('./textures/bouza.jpeg')
const blancoTexture = textureLoader.load('./textures/blanco.jpg')
const seoaneTexture = textureLoader.load('./textures/seoane.jpg')
const diesteTexture = textureLoader.load('./textures/dieste.jpg')
const couseloTexture = textureLoader.load('./textures/couselo.jpg')
const foleTexture = textureLoader.load('./textures/fole.jpg')
const cangasTexture = textureLoader.load('./textures/cangas.jpg')
const torresTexture = textureLoader.load('./textures/torres.jpg')
const murguiaTexture = textureLoader.load('./textures/murguia.jpg')
const eladioTexture = textureLoader.load('./textures/eladio.jpg')
const sarmientoTexture = textureLoader.load('./textures/sarmiento.jpeg')
const avilesTexture = textureLoader.load('./textures/aviles.jpg')
const xaquinTexture = textureLoader.load('./textures/xaquin.jpg')
const lorenzoTexture = textureLoader.load('./textures/lorenzo.jpg')
const lugrisTexture = textureLoader.load('./textures/lugris.jpg')
const mariñoTexture = textureLoader.load('./textures/mariño.jpg')
const alvarezTexture = textureLoader.load('./textures/alvarez.jpg')
const piñeiroTexture = textureLoader.load('./textures/piñeiro.jpg')
const novoneyraTexture = textureLoader.load('./textures/novoneyra.jpg')
const pereiroTexture = textureLoader.load('./textures/pereiro.jpg')
const pazTexture = textureLoader.load('./textures/paz.jpg')
const vidalTexture = textureLoader.load('./textures/vidal.jpg')
const diazTexture = textureLoader.load('./textures/diaz.jpg')
const filgueiraTexture = textureLoader.load('./textures/filgueira.jpg')
const mariaTexture = textureLoader.load('./textures/maria.jpg')
const casaresTexture = textureLoader.load('./textures/casares.jpg')
const morenoTexture = textureLoader.load('./textures/moreno.jpg')
const fraguasTexture = textureLoader.load('./textures/fraguas.jpg')
const carballoTexture = textureLoader.load('./textures/carballo.jpg')
const ariasTexture = textureLoader.load('./textures/arias.jpg')
const delgadoTexture = textureLoader.load('./textures/delgado.jpg')

// geometry
const geometry = new THREE.PlaneGeometry(1.7, 2.5, 32, 32)
const count = geometry.attributes.position.count
const randoms = new Float32Array(count)

for(let i = 0; i < count; i++) {
    randoms[i] = Math.random()
}

geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))


// material

const rosaliaShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink') },
        uTexture: { value: rosaliaTexture }
    }
})
const castelaoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink') },
        uTexture: { value: castelaoTexture }
    }
})
const pondalShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: pondalTexture }
    }
})
const añonShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: añonTexture }
    }
})
const currosShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: currosTexture }
    }
})
const cuevillasShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: cuevillasTexture }
    }
})
const noriegaShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: noriegaTexture }
    }
})
const valladaresShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: valladaresTexture }
    }
})
const abenteShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: abenteTexture }
    }
})
const lamasShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: lamasTexture }
    }
})
const lagoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: lagoTexture }
    }
})
const viqueiraShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: viqueiraTexture }
    }
})
const pintosShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: pintosTexture }
    }
})
const cabanillasShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: cabanillasTexture }
    }
})
const villarShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: villarTexture }
    }
})
const ferreiroShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: ferreiroTexture }
    }
})
const antonioShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: antonioTexture }
    }
})
const alfonsoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: alfonsoTexture }
    }
})
const riscoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: riscoTexture }
    }
})
const amadoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: amadoTexture }
    }
})
const leirasShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: leirasTexture }
    }
})
const cotareloShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: cotareloTexture }
    }
})
const losadaShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: losadaTexture }
    }
})
const iglesiaShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: iglesiaTexture }
    }
})
const franciscaShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: franciscaTexture }
    }
})
const oteroShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: oteroTexture }
    }
})
const emilioShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: emilioTexture }
    }
})
const pimentelShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: pimentelTexture }
    }
})
const cunqueiroShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: cunqueiroTexture }
    }
})
const bouzaShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: bouzaTexture }
    }
})
const blancoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: blancoTexture }
    }
})
const seoaneShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: seoaneTexture }
    }
})
const diesteShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: diesteTexture }
    }
})
const couseloShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: couseloTexture }
    }
})
const foleShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: foleTexture }
    }
})
const cangasShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: cangasTexture }
    }
})
const torresShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: torresTexture }
    }
})
const murguiaShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: murguiaTexture }
    }
})
const eladioShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: eladioTexture }
    }
})
const sarmientoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: sarmientoTexture }
    }
})
const avilesShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: avilesTexture }
    }
})
const xaquinShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: xaquinTexture }
    }
})
const lorenzoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: lorenzoTexture }
    }
})
const lugrisShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: lugrisTexture }
    }
})
const mariñoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: mariñoTexture }
    }
})
const alvarezShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: alvarezTexture }
    }
})
const piñeiroShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: piñeiroTexture }
    }
})
const novoneyraShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: novoneyraTexture }
    }
})
const pereiroShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: pereiroTexture }
    }
})
const pazShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: pazTexture }
    }
})
const vidalShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: vidalTexture }
    }
})
const diazShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: diazTexture }
    }
})
const filgueiraShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: filgueiraTexture }
    }
})
const mariaShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: mariaTexture }
    }
})
const casaresShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: casaresTexture }
    }
})
const morenoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: morenoTexture }
    }
})
const fraguasShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: fraguasTexture }
    }
})
const carballoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: carballoTexture }
    }
})
const ariasShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: ariasTexture }
    }
})
const delgadoShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
        uFrequency: { value: new THREE.Vector2(4, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('pink')},
        uTexture: { value: delgadoTexture }
    }
})

// meshes
const objectsDistance = 4

const mesh1 = new THREE.Mesh(
    geometry,
    rosaliaShaderMaterial
)

const mesh2 = new THREE.Mesh(
    geometry,
    castelaoShaderMaterial
)

const mesh3 = new THREE.Mesh(
    geometry,
    pondalShaderMaterial
)
const mesh4 = new THREE.Mesh(
    geometry,
    añonShaderMaterial
)
const mesh5 = new THREE.Mesh(
    geometry,
    currosShaderMaterial
)
const mesh6 = new THREE.Mesh(
    geometry,
    cuevillasShaderMaterial
)
const mesh7 = new THREE.Mesh(
    geometry,
    noriegaShaderMaterial
)
const mesh8 = new THREE.Mesh(
    geometry,
    valladaresShaderMaterial
)
const mesh9 = new THREE.Mesh(
    geometry,
    abenteShaderMaterial
)
const mesh10 = new THREE.Mesh(
    geometry,
    lamasShaderMaterial
)
const mesh11 = new THREE.Mesh(
    geometry,
    lagoShaderMaterial
)
const mesh12 = new THREE.Mesh(
    geometry,
    viqueiraShaderMaterial
)
const mesh13 = new THREE.Mesh(
    geometry,
    pintosShaderMaterial
)
const mesh14 = new THREE.Mesh(
    geometry,
    cabanillasShaderMaterial
)
const mesh15 = new THREE.Mesh(
    geometry,
    villarShaderMaterial
)
const mesh16 = new THREE.Mesh(
    geometry,
    ferreiroShaderMaterial
)
const mesh17 = new THREE.Mesh(
    geometry,
    antonioShaderMaterial
)
const mesh18 = new THREE.Mesh(
    geometry,
    alfonsoShaderMaterial
)
const mesh19 = new THREE.Mesh(
    geometry,
    riscoShaderMaterial
)
const mesh20 = new THREE.Mesh(
    geometry,
    amadoShaderMaterial
)
const mesh21 = new THREE.Mesh(
    geometry,
    leirasShaderMaterial
)
const mesh22 = new THREE.Mesh(
    geometry,
    cotareloShaderMaterial
)
const mesh23 = new THREE.Mesh(
    geometry,
    losadaShaderMaterial
)
const mesh24 = new THREE.Mesh(
    geometry,
    iglesiaShaderMaterial
)
const mesh25 = new THREE.Mesh(
    geometry,
    franciscaShaderMaterial
)
const mesh26 = new THREE.Mesh(
    geometry,
    oteroShaderMaterial
)
const mesh27 = new THREE.Mesh(
    geometry,
    emilioShaderMaterial
)
const mesh28 = new THREE.Mesh(
    geometry,
    pimentelShaderMaterial
)
const mesh29 = new THREE.Mesh(
    geometry,
    cunqueiroShaderMaterial
)
const mesh30 = new THREE.Mesh(
    geometry,
    bouzaShaderMaterial
)
const mesh31 = new THREE.Mesh(
    geometry,
    blancoShaderMaterial
)
const mesh32 = new THREE.Mesh(
    geometry,
    seoaneShaderMaterial
)
const mesh33 = new THREE.Mesh(
    geometry,
    diesteShaderMaterial
)
const mesh34 = new THREE.Mesh(
    geometry,
    couseloShaderMaterial
)
const mesh35 = new THREE.Mesh(
    geometry,
    foleShaderMaterial
)
const mesh36 = new THREE.Mesh(
    geometry,
    cangasShaderMaterial
)
const mesh37 = new THREE.Mesh(
    geometry,
    torresShaderMaterial
)
const mesh38 = new THREE.Mesh(
    geometry,
    murguiaShaderMaterial
)
const mesh39 = new THREE.Mesh(
    geometry,
    eladioShaderMaterial
)
const mesh40 = new THREE.Mesh(
    geometry,
    sarmientoShaderMaterial
)
const mesh41 = new THREE.Mesh(
    geometry,
    avilesShaderMaterial
)
const mesh42 = new THREE.Mesh(
    geometry,
    xaquinShaderMaterial
)
const mesh43 = new THREE.Mesh(
    geometry,
    lorenzoShaderMaterial
)
const mesh44 = new THREE.Mesh(
    geometry,
    lugrisShaderMaterial
)
const mesh45 = new THREE.Mesh(
    geometry,
    mariñoShaderMaterial
)
const mesh46 = new THREE.Mesh(
    geometry,
    alvarezShaderMaterial
)
const mesh47 = new THREE.Mesh(
    geometry,
    piñeiroShaderMaterial
)
const mesh48 = new THREE.Mesh(
    geometry,
    novoneyraShaderMaterial
)
const mesh49 = new THREE.Mesh(
    geometry,
    pereiroShaderMaterial
)
const mesh50 = new THREE.Mesh(
    geometry,
    pazShaderMaterial
)
const mesh51 = new THREE.Mesh(
    geometry,
    vidalShaderMaterial
)
const mesh52 = new THREE.Mesh(
    geometry,
    diazShaderMaterial
)
const mesh53 = new THREE.Mesh(
    geometry,
    filgueiraShaderMaterial
)
const mesh54 = new THREE.Mesh(
    geometry,
    mariaShaderMaterial
)
const mesh55 = new THREE.Mesh(
    geometry,
    casaresShaderMaterial
)
const mesh56 = new THREE.Mesh(
    geometry,
    morenoShaderMaterial
)
const mesh57 = new THREE.Mesh(
    geometry,
    fraguasShaderMaterial
)
const mesh58 = new THREE.Mesh(
    geometry,
    carballoShaderMaterial
)
const mesh59 = new THREE.Mesh(
    geometry,
    ariasShaderMaterial
)
const mesh60 = new THREE.Mesh(
    geometry,
    delgadoShaderMaterial
)


mesh1.position.y = - objectsDistance * 0
mesh2.position.y = - objectsDistance * 1
mesh3.position.y = - objectsDistance * 2
mesh4.position.y = - objectsDistance * 3
mesh5.position.y = - objectsDistance * 4
mesh6.position.y = - objectsDistance * 5
mesh7.position.y = - objectsDistance * 6
mesh8.position.y = - objectsDistance * 7
mesh9.position.y = - objectsDistance * 8
mesh10.position.y = - objectsDistance * 9
mesh11.position.y = - objectsDistance * 10
mesh12.position.y = - objectsDistance * 11
mesh13.position.y = - objectsDistance * 12
mesh14.position.y = - objectsDistance * 13
mesh15.position.y = - objectsDistance * 14
mesh16.position.y = - objectsDistance * 15
mesh17.position.y = - objectsDistance * 16
mesh18.position.y = - objectsDistance * 17
mesh19.position.y = - objectsDistance * 18
mesh20.position.y = - objectsDistance * 19
mesh21.position.y = - objectsDistance * 20
mesh22.position.y = - objectsDistance * 21
mesh23.position.y = - objectsDistance * 22
mesh24.position.y = - objectsDistance * 23
mesh25.position.y = - objectsDistance * 24
mesh26.position.y = - objectsDistance * 25
mesh27.position.y = - objectsDistance * 26
mesh28.position.y = - objectsDistance * 27
mesh29.position.y = - objectsDistance * 28
mesh30.position.y = - objectsDistance * 29
mesh31.position.y = - objectsDistance * 30
mesh32.position.y = - objectsDistance * 31
mesh33.position.y = - objectsDistance * 32
mesh34.position.y = - objectsDistance * 33
mesh35.position.y = - objectsDistance * 34
mesh36.position.y = - objectsDistance * 35
mesh37.position.y = - objectsDistance * 36
mesh38.position.y = - objectsDistance * 37
mesh39.position.y = - objectsDistance * 38
mesh40.position.y = - objectsDistance * 39
mesh41.position.y = - objectsDistance * 40
mesh42.position.y = - objectsDistance * 41
mesh43.position.y = - objectsDistance * 42
mesh44.position.y = - objectsDistance * 43
mesh45.position.y = - objectsDistance * 44
mesh46.position.y = - objectsDistance * 45
mesh47.position.y = - objectsDistance * 46
mesh48.position.y = - objectsDistance * 47
mesh49.position.y = - objectsDistance * 48
mesh50.position.y = - objectsDistance * 49
mesh51.position.y = - objectsDistance * 50
mesh52.position.y = - objectsDistance * 51
mesh53.position.y = - objectsDistance * 52
mesh54.position.y = - objectsDistance * 53
mesh55.position.y = - objectsDistance * 54
mesh56.position.y = - objectsDistance * 55
mesh57.position.y = - objectsDistance * 56
mesh58.position.y = - objectsDistance * 57
mesh59.position.y = - objectsDistance * 58
mesh60.position.y = - objectsDistance * 59

scene.add(
    mesh1, 
    mesh2,
    mesh3, 
    mesh4,
    mesh5,
    mesh6,
    mesh7,
    mesh8,
    mesh9,
    mesh10,
    mesh11,
    mesh12,
    mesh13,
    mesh14,
    mesh15,
    mesh16,
    mesh17,
    mesh18,
    mesh19,
    mesh20,
    mesh21,
    mesh22,
    mesh23,
    mesh24,
    mesh25,
    mesh26,
    mesh27,
    mesh28,
    mesh29,
    mesh30,
    mesh31,
    mesh32,
    mesh33,
    mesh34,
    mesh35,
    mesh36,
    mesh37,
    mesh38,
    mesh39,
    mesh40,
    mesh41,
    mesh42,
    mesh43,
    mesh44,
    mesh45,
    mesh46,
    mesh47,
    mesh48,
    mesh49,
    mesh50,
    mesh51,
    mesh52,
    mesh53,
    mesh54,
    mesh55,
    mesh56,
    mesh57,
    mesh58, 
    mesh59, 
    mesh60
    )
const sectionMeshes = [mesh1, mesh2]


// lights
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth / 2,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth / 2
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)
// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// scroll
// let scrollY = window.scrollY
// let currentSection = 0

const container = document.querySelector('.container')
const mediasize = window.matchMedia("(max-width: 480px)")

container.addEventListener('scroll', () => {
    camera.position.y = - container.scrollTop / sizes.height * objectsDistance
    // if (container.scrollTop < 100) {
    //     camera.position.y = 0
    // } else {
    //     camera.position.y = - objectsDistance
    // }

    if (mediasize.matches) {
        camera.position.y = - container.scrollTop / sizes.height * 3.7
    }
})

// cursor
const cursor = {}
cursor.x = 0
cursor.y = 0

container.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Animate
 */
const clock = new THREE.Clock()
let previusTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previusTime
    previusTime = elapsedTime

    rosaliaShaderMaterial.uniforms.uTime.value = elapsedTime
    castelaoShaderMaterial.uniforms.uTime.value = elapsedTime
    pondalShaderMaterial.uniforms.uTime.value = elapsedTime
    añonShaderMaterial.uniforms.uTime.value = elapsedTime
    currosShaderMaterial.uniforms.uTime.value = elapsedTime
    cuevillasShaderMaterial.uniforms.uTime.value = elapsedTime
    noriegaShaderMaterial.uniforms.uTime.value = elapsedTime
    valladaresShaderMaterial.uniforms.uTime.value = elapsedTime
    abenteShaderMaterial.uniforms.uTime.value = elapsedTime
    lamasShaderMaterial.uniforms.uTime.value = elapsedTime
    lagoShaderMaterial.uniforms.uTime.value = elapsedTime
    viqueiraShaderMaterial.uniforms.uTime.value = elapsedTime
    pintosShaderMaterial.uniforms.uTime.value = elapsedTime
    cabanillasShaderMaterial.uniforms.uTime.value = elapsedTime
    villarShaderMaterial.uniforms.uTime.value = elapsedTime
    ferreiroShaderMaterial.uniforms.uTime.value = elapsedTime
    antonioShaderMaterial.uniforms.uTime.value = elapsedTime
    alfonsoShaderMaterial.uniforms.uTime.value = elapsedTime
    riscoShaderMaterial.uniforms.uTime.value = elapsedTime
    amadoShaderMaterial.uniforms.uTime.value = elapsedTime
    leirasShaderMaterial.uniforms.uTime.value = elapsedTime
    cotareloShaderMaterial.uniforms.uTime.value = elapsedTime
    losadaShaderMaterial.uniforms.uTime.value = elapsedTime
    iglesiaShaderMaterial.uniforms.uTime.value = elapsedTime
    franciscaShaderMaterial.uniforms.uTime.value = elapsedTime
    oteroShaderMaterial.uniforms.uTime.value = elapsedTime
    emilioShaderMaterial.uniforms.uTime.value = elapsedTime
    pimentelShaderMaterial.uniforms.uTime.value = elapsedTime
    cunqueiroShaderMaterial.uniforms.uTime.value = elapsedTime
    bouzaShaderMaterial.uniforms.uTime.value = elapsedTime
    blancoShaderMaterial.uniforms.uTime.value = elapsedTime
    seoaneShaderMaterial.uniforms.uTime.value = elapsedTime
    diesteShaderMaterial.uniforms.uTime.value = elapsedTime
    couseloShaderMaterial.uniforms.uTime.value = elapsedTime
    foleShaderMaterial.uniforms.uTime.value = elapsedTime
    cangasShaderMaterial.uniforms.uTime.value = elapsedTime
    torresShaderMaterial.uniforms.uTime.value = elapsedTime
    murguiaShaderMaterial.uniforms.uTime.value = elapsedTime
    eladioShaderMaterial.uniforms.uTime.value = elapsedTime
    sarmientoShaderMaterial.uniforms.uTime.value = elapsedTime
    avilesShaderMaterial.uniforms.uTime.value = elapsedTime
    xaquinShaderMaterial.uniforms.uTime.value = elapsedTime
    lorenzoShaderMaterial.uniforms.uTime.value = elapsedTime
    lugrisShaderMaterial.uniforms.uTime.value = elapsedTime
    mariñoShaderMaterial.uniforms.uTime.value = elapsedTime
    alvarezShaderMaterial.uniforms.uTime.value = elapsedTime
    piñeiroShaderMaterial.uniforms.uTime.value = elapsedTime
    novoneyraShaderMaterial.uniforms.uTime.value = elapsedTime
    pereiroShaderMaterial.uniforms.uTime.value = elapsedTime
    pazShaderMaterial.uniforms.uTime.value = elapsedTime
    vidalShaderMaterial.uniforms.uTime.value = elapsedTime
    diazShaderMaterial.uniforms.uTime.value = elapsedTime
    filgueiraShaderMaterial.uniforms.uTime.value = elapsedTime
    mariaShaderMaterial.uniforms.uTime.value = elapsedTime
    casaresShaderMaterial.uniforms.uTime.value = elapsedTime
    morenoShaderMaterial.uniforms.uTime.value = elapsedTime
    fraguasShaderMaterial.uniforms.uTime.value = elapsedTime
    carballoShaderMaterial.uniforms.uTime.value = elapsedTime
    ariasShaderMaterial.uniforms.uTime.value = elapsedTime
    delgadoShaderMaterial.uniforms.uTime.value = elapsedTime


    // // animate camera
    // camera.position.y = - scrollY / sizes.height * objectsDistance

    const parallaxX = cursor.x * 0.5
    const parallaxY = - cursor.y * 0.5
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

}

tick()