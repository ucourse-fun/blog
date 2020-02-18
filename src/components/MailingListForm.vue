<template>
    <v-form
        ref='mailingListForm'
        v-model='valid'
        @submit='onSubmit'
    >
        <v-text-field
            label='Email'
            v-model='email'
            :rules='emailRules'
        >
        
        </v-text-field>
    </v-form>
</template>

<script>
export default {
    data: () => {
        return {
            valid: false,
            email: '',
            emailRules: [ 
                v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email 不正確'
            ]
        }
    },
    props: {
        source: {
            type: String,
            required: false,
            default: 'ucourse.fun',
        }
    },
}

</script>
