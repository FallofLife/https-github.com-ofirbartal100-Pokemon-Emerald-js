import { loadJSON, loadImage } from './loaders/spriteSheet.js'
import { createPartyPageLayer } from './layers/partyPage.js'
import { createPartyPokemonLayer } from './layers/partyPokemon.js'
const BATTLE = 0
const INFO = 1

export default class PartyPage {
    constructor() {
        this.active = false
        this.menuType = INFO
        this.loadGraphics()
        this.party
        window.pp = this
    }

    loadGraphics() {
        loadJSON('../pokemon/partyGraphics.json').then(graphicsUrls => {
            Promise.all(graphicsUrls.urls.map(loadImage))
                .then(images => {
                    this.graphics = images
                })
        })

    }

    move(direction, state) {
        if (!state) {
            return
        }
        if (direction == 'ArrowUp') {

        } else if (direction == 'ArrowDown') {

        } else if (direction == 'ArrowRight') {

        } else if (direction == 'ArrowLeft') {

        }
    }

    action(command, state) {
        if (!state) {
            return
        }
        if (command == Commands[0]) {

        } else if (command == Commands[1]) {

        } else if (command == Commands[2]) {

        }
    }

    drawComponents(context) {
        if (this.party) {
            for (let i = 0; i < 6; i++) {
                createPartyPokemonLayer(i, this.party.pokemons[i],this.graphics)(context)
            }
        }
    }

    update(deltaTime) {
        this.layer = createPartyPageLayer(this.party, this.graphics)
    }

    draw(context) {
        if (this.active) {
            this.layer(context)
            this.drawComponents(context)
        }
    }
}