'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     增加一个新的功能'},
    {value: 'bugfix',   name: 'bugfix:   修复非jira上的bug'},
    {value: 'jira',     name: 'jira:     修复jira上的bug(携带ID) e.g #10010' },
    {value: 'docs',     name: 'docs:     变更文档'},
    {value: 'style',    name: 'style:    修复代码格式'},
    {value: 'refactor', name: 'refactor: 代码重构, 不影响功能'},
    {value: 'misc',     name: 'misc:     杂项提交'},
    {value: 'chore',    name: 'chore:    工具变更, 构建流程,插件等'}
  ],



  messages: {
    type: '选择本次提交类型:',
    subject: '提交信息（请认填写):\n',
    confirmCommit: '确认提交以上信息?',
    allowCustomScopes: false
  },

  skipQuestions: ['customScope', 'scope', 'body', 'breaking', 'footer', ],

  allowBreakingChanges: ['feat', 'fix'],

  subjectLimit: 100  
};
