/** @type {import('cz-git').UserConfig} */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // --------- 提交新功能
        "fix", // -----------修复了 bug
        "docs", // ----------只修改了文档
        "style", // ---------调整代码格式，未修改代码逻辑（比如修改空格、格式化、缺少分号等
        "refactor", // ------代码重构，既没修复 bug 也没有添加新功能
        "test", // ----------添加或修改代码测试
        "build", // ---------构造工具的或者外部依赖的改动，例如webpack，npm
        "chore", // ---------对构建流程或辅助工具和依赖库（如文档生成等）的更改
        "perf", // ----------性能优化，提高性能的代码更改
        "ci",
        "revert",
      ],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
  },
  prompt: {
    useEmoji: true,
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: "选择关联issue前缀（可选）:",
      customFooterPrefix: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: [
      {
        value: "feat",
        emoji: "✨",
        name: "feat:     新增功能 | A new feature",
      },
      { value: "fix", name: "fix:      修复缺陷 | A bug fix" },
      {
        value: "docs",
        emoji: "📚",
        name: "docs:     文档更新 | Documentation only changes",
      },
      {
        value: "style",
        emoji: "💎",
        name: "style:    代码格式 | Changes that do not affect the meaning of the code",
      },
      {
        value: "refactor",
        emoji: "📦",
        name: "refactor: 代码重构 | A code change that neither fixes a bug nor adds a feature",
      },
      {
        value: "perf",
        emoji: "🚀",
        name: "perf:     性能提升 | A code change that improves performance",
      },
      {
        value: "test",
        emoji: "🚨",
        name: "test:     测试相关 | Adding missing tests or correcting existing tests",
      },
      {
        value: "build",
        emoji: "🛠",
        name: "build:    构建相关 | Changes that affect the build system or external dependencies",
      },
      {
        value: "ci",
        emoji: "⚙️",
        name: "ci:       持续集成 | Changes to our CI configuration files and scripts",
      },
      {
        value: "revert",
        emoji: "🗑",
        name: "revert:   回退代码 | Revert to a commit",
      },
      {
        value: "chore",
        emoji: "♻️",
        name: "chore:    其他修改 | Other changes that do not modify src or test files",
      },
    ],
  },
};
