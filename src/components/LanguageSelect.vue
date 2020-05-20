<template>
  <div class="locale-changer">
    <!-- <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select> -->
    
    <v-select 
    :items="langs"
    v-model="$i18n.locale"
    :label="$t('language.label')"
    name="Language"
    prepend-icon="language"
    >
    <template slot="selection" slot-scope="data">
        <!-- HTML that describe how select should render selected items -->
        <img :src="`/flag_${$i18n.locale}.svg`" alt="flag"> {{ data.item.text }} 
    </template>    
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { 
      langs: [
        {
          text: 'Русский',
          value:'ru'
        }, 
        {
          text: 'English',
          value:'en'
        }, 
        {
          text: 'Azərbaycan',
          value:'az'
        }
      ] 
      }
  }
}
</script>

<style scoped>
  .v-select__selections img {
      width: 30px;
      margin-right: 10px;
  }
</style>