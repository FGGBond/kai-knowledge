import comp from "D:/WorkSpace/kai-knowledge/docs/.vuepress/.temp/pages/posts/article6.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article6.html\",\"title\":\"Article 6\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-06T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1749733136000,\"contributors\":[{\"name\":\"zhukai\",\"username\":\"zhukai\",\"email\":\"zhukai12310226@163.com\",\"commits\":1,\"url\":\"https://github.com/zhukai\"}],\"changelog\":[{\"hash\":\"056b585c8a43f95342f3fb9ecf0f4e8e28355957\",\"time\":1749733136000,\"email\":\"zhukai12310226@163.com\",\"author\":\"zhukai\",\"message\":\"first commit\"}]},\"filePathRelative\":\"posts/article6.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
