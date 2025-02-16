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

// Função para adicionar efeito no clique do botão direito do anel de esmeralda
const emeraldRingComponent = {
    onUse(event) {
        const player = event.source // The entity that used the item on the block.
        const act = event.itemStack // The block permutation that the item was used onw.
        
        if (player && act) {
            //Minecraft.world.sendMessage("Efeito da esmeralda aplicado");
            player.runCommand("/summon iron_golem ^ ^ ^5");
        }
    }
};

// Registrando funções e atribuindo elas aos itens / componentes
Minecraft.world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("forge:amethyst_ring", amethystRingComponent);
    itemComponentRegistry.registerCustomComponent("forge:emerald_ring", emeraldRingComponent);
});
