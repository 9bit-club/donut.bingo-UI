<template>
    <div class="w-full h-full fixed opacity-0 z-[3]">
        <div class="w-full max-h-16 p-4 flex flex-inline container mx-auto bg-dark z-[99] justify-between">
            <img src="~/assets/svg/logo.svg" alt="Donut bingo logo" class="" />
            <a class="bg-blue bit-font text-white px-12 py-2 rounded text-[12px] cursor-pointer">Mint</a>
        </div>
        <div class="h-full w-1/6">
                <ul class=" text-white pl-16 flex-wrap" >
                    <li id="menuAbout" class="h-1/4 -scale-[100%] text-center opacity-20 bit-font" style="writing-mode:vertical-lr;">
                        About        
                    </li>
                    <li id="menuHow" class="h-1/3 -scale-[100%] text-center opacity-20 bit-font" style="writing-mode:vertical-lr;">
                        How to play
                    </li>
                    <li id="menuGeneral" class="h-1/3 -scale-[100%] text-center opacity-20 bit-font" style="writing-mode:vertical-lr;">
                        General
                    </li>
            </ul>
        </div>
    </div>
</template>