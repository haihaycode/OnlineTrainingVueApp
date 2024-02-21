<template>
  <div>
    <froala-editor
      tag-name="textarea"
      v-model="content"
      :config="editorConfig"
    />
  </div>
</template>

<script>
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'font-awesome/css/font-awesome.css';
import VueFroala from 'vue-froala-wysiwyg';

export default {
  name: 'FroalaEditor',
  components: {
    FroalaEditor: VueFroala,
  },
  data() {
    return {
      content: '<p>Hello, Froala Editor!</p>',
      editorConfig: {
        // Cấu hình Froala Editor ở đây
      },
    };
  },
};
</script>
