'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: 'feat:     增加一个新的功能'},
    {value: 'bugfix',   name: 'bugfix:   修复非jira上的bug'},
    {value: 'jira',   name: 'jira:   修复jira上的bug e.g: jira-[TrackingId]'},
    {value: 'docs',     name: 'docs:     变更文档'},
    {value: 'style',    name: 'style:    修复代码格式'},
    {value: 'refactor', name: 'refactor: 代码重构, 不影响功能'},
    {value: 'misc',     name: 'misc:  杂项提交'},
    {value: 'chore',    name: 'chore:   工具变更, 构建流程,插件等'}
  ],



  messages: {
    type: 'Select the type of change that you\'re committing:',
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowBreakingChanges: ['feat', 'fix'],

  subjectLimit: 100  
};
