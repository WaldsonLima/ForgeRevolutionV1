import * as Minecraft from "@minecraft/server";

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

Minecraft.world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
    itemComponentRegistry.registerCustomComponent("forge:amethyst_ring", amethystRingComponent);
});

// SCRIPT PARA ADICIONAR PESO PENA AO CLIQUE DO BOTÃO DIREITO DO ANEL DE FLUORITA
// const fluoriteRingComponent = {
//     onUse(event) {
//         const player = event.source // The entity that used the item on the block.
//         const act = event.itemStack // The block permutation that the item was used onw.
        
//         if (player && act) {
//             //Minecraft.world.sendMessage("Efeito da fluorita aplicado");
//             player.runCommand("/effect @s slow_falling 5 1");
//         }
//     }
// };

// Minecraft.world.beforeEvents.worldInitialize.subscribe(({ itemComponentRegistry }) => {
//     itemComponentRegistry.registerCustomComponent("forge:fluorite_ring", fluoriteRingComponent);
// });