const defaultOptions = {
  basePath: '/',
  contentPath: 'content',
  isPost: () => true,
  pagination: 0,
  buildIndex: true,
  buildCategoryIndex: true,
  buildTagIndex: true,
  slug: '$category/$export_file_name',
}

module.exports = options => {
  return {
    ...defaultOptions,
    ...options,
  }
}