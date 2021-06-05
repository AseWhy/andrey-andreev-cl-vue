<template>
    <div class="av-dropdown-menu">
        <div 
            class="av-menu-item"
            @click="$router.push('/personal')"
        >
            Personal account
        </div>
        <hr>
        <div 
            class="av-menu-item"
            @click="$router.push('/orders')"
        >
            Orders
        </div>
    </div>
</template>

<style scoped>
    .av-dropdown-menu {
        position: absolute;
        top: 5rem;
        left: 0;
        z-index: -1;
        background: white;
        text-align: center;
        padding: 0 2.5rem 2.5rem;
        border-radius: 0 0 5rem 5rem;
        box-shadow: 0px 10px 10px gray;
        cursor: default;
    }

    .av-menu-item {
        padding: 0.5rem;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 1.5rem;
        color: rgba(0, 0, 0, 0.75);
        cursor: pointer;
    }

    .av-menu-item:hover {
        background-color: whitesmoke;
    }

    .av-dropdown-menu {
        white-space: pre;
        left: -125%;
    }

    hr {
        width: 80%;
    }
</style>