import * as Minecraft from "@minecraft/server";

// Função para adicionar efeito no clique do botão direito do anel de ametista
const amethystRingComponent = {
    onUse(event) {
        const player = event.source // The entity that used the item on the block.
        const act = event.itemStack // The block permutation that the item was used onw.
        
        if (player && act) {
            //Minecraft.world.sendMessage("Efeito da ametista aplicado");
            player.runCommand("/effect @s regeneration 30 1");
        }
    }
};

// Função para adicionar efeito no clique do botão direito das katanas
const katanaComponent = {
    onUse(event) {
        const player = event.source
        const act = event.itemStack

        if (player && act) {
            player.runCommand("/teleport @s ^ ^1 ^5", );
        }
    }
};

// Registrando funções e atribuindo elas aos itens / componentes
Minecraft.world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("forge:amethyst_ring", amethystRingComponent);
    itemComponentRegistry.registerCustomComponent("forge:topaz_katana", katanaComponent);
    itemComponentRegistry.registerCustomComponent("forge:jade_katana", katanaComponent);
});
