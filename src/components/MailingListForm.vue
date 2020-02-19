<template>
  <v-card>
    <v-card-text>
    <v-form
        ref='mailingListForm'
        v-model='valid'
        @submit.prevent='onSubmit'
    >
        <v-text-field
            label='Email'
            v-model='email'
            :rules='emailRules'
            autofocus='true'
        >
        
        </v-text-field>
        <div class='text-xs-center'>
          <v-btn color='primary' dark type='submit'>送出</v-btn>
          <v-btn color='warning' @click="$emit('close')">關閉</v-btn>
        </div>
    </v-form>
    </v-card-text>
  </v-card>
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
    methods: {
      onSubmit(){
        console.log('submit')
      },
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
