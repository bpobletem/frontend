<template>
    <div class="bubble">
        <div class="message-bubble" v-for="(message,index) in messages" :key="index" :style="{ textAlign: message.align}">
            <p>{{ message.name }}</p>
            <p :style="{ backgroundColor: message.color }" class="message">{{ message.message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        messages: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
*{
    margin: 0;
}

.message {
    font-size: 14px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px #979797;
    display: inline-block;
    word-break: break-word;
}

.message-bubble{
    margin-bottom: 10px;
}

</style>
