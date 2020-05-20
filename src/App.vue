<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>{{ $t('toolbar.title') }}</v-toolbar-title>
                <v-spacer></v-spacer>
                
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    :label="$t('login.label')"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    :label="$t('password.label')"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>   
                  <LanguageSelect />                 
                </v-form>
              </v-card-text>
              <!-- <language-switcher /> -->
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">{{ $t('loginBtn.label') }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import LanguageSelect from '@/components/LanguageSelect.vue'
// import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

export default {
  name: 'App',

  components: {    
    LanguageSelect,
    // LanguageSwitcher
  },

  data: () => ({
    //
  }),
};
</script>
