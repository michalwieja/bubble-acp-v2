<template>
  <div class="column q-pa-lg">
    <div class="row justify-center">
      <q-card class="shadow-24" square style="width:300px;height:485px;">
        <q-card-section class="bg-primary">
          <h4 class="text-h5 text-white q-my-md">Login</h4>
        </q-card-section>
        <q-card-section>
          <q-form class="q-pa-sm" @keyup.enter="onLogin">
            <q-input v-model="body.email" clearable label="Email" square type="email">
              <template v-slot:prepend>
                <q-icon name="email"/>
              </template>
            </q-input>
            <q-input v-model="body.password" clearable label="Password" square type="password">
              <template v-slot:prepend>
                <q-icon name="lock"/>
              </template>
            </q-input>
          </q-form>
        </q-card-section>

        <q-card-actions class="q-px-lg">
          <q-btn class="full-width text-white" color="primary" label="Log In" size="lg"
                 unelevated @click="onLogin"/>
        </q-card-actions>

        <q-card-section class="text-center q-pa-sm">
          <q-btn flat @click="recoverPassword" label="Forgot your password?"/>
        </q-card-section>

      </q-card>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
  name: 'PageIndex',
  data() {
    return {
      body: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('auth', ['login']),

    async onLogin() {
      await this.login(this);
    },
    recoverPassword() {
      console.warn('recover');
    }
  }
};
</script>
