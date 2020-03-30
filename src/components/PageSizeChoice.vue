<template>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Résultats par page</label>
                    <select v-model="results" class="custom-select">
                        <option @click="sizeChoice(results)" value="5">5</option>
                        <option @click="sizeChoice(results)" value="10">10</option>
                        <option @click="sizeChoice(results)" value="15">15</option>
                        <option @click="sizeChoice(results)" value="20">20</option>
                    </select>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return {
            results:""
        }
    },
    methods: {
        sizeChoice(results){
            console.log("choice", results)
            this.$emit("size", results)
        }
    }
}
</script>