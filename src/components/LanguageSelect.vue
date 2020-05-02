<template>
  <div class="locale-changer">
    <v-select
        :items="items"
        prepend-icon="language"
        label="Язык"
    ></v-select>
  </div>
  <!-- <div class="locale-changer">
    <v-select 
    v-model="$i18n.locale"
    prepend-icon="language"
    >
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </v-select>
  </div> -->
</template>

<script>

export default {
  
  name: 'LanguageSelect',
  data: () => ({
        items: ['Русский', 'Английский', 'Азербайджанский'],
    }),
}

// export default {
//   name: 'LanguageSelect',
//   data () {
//     return { langs: ['en', 'ru'] }
//   }
// }
// </script>