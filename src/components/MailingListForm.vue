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
            :autofocus='true'
        >
        
        </v-text-field>
        <div class='text-xs-center'>
          <v-btn color='primary' type='submit' :disabled='!valid' :loading='loading'>送出</v-btn>
          <v-btn color='warning' @click="resetForm()">關閉</v-btn>
        </div>
    </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios'

export default {
    data: () => {
        return {
            valid: false,
            loading: false,
            email: '',
            emailRules: [ 
                v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '無效的Email'
            ]
        }
    },
    methods: {
      resetForm(){
        this.loading = false
        this.$refs.mailingListForm.reset()
        this.$emit('close')
      },
      async onSubmit(){
        if(this.$refs.mailingListForm.validate() && !this.loading){
          this.loading = true
          this.valid = false
          const url = 'https://script.google.com/macros/s/AKfycbxykN1-WQlfP2-qKKmJPHKLPrKgZdNe8Fcvpl61Ub5YvyCRZiwh/exec'
          const data = {
            "source": this.source,
            "email": this.email
          }
          const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
          const options = {
            method: 'POST',
            headers,
            data,
            url,
          }
          const response = await axios(options)
          this.resetForm()
        }
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
