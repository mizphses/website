import { danger, warn } from 'danger'

const IGNORE_BRANCH = ['revert']
const baseBranch = danger.github.pr.base.ref
const headBranch = danger.github.pr.head.ref

function checkBranchName(headBranch: string, _baseBranch: string) {
  // ブランチ名にrelease,revertが含む場合チェックしないフラグ
  const isCheckBranch = !IGNORE_BRANCH.find(value => {
    return headBranch.includes(value)
  })

  if (!isCheckBranch || danger.github.pr.draft) {
    return
  }

  if (danger.github.pr.additions + danger.github.pr.deletions > 1100) {
    warn('PR の変更量が多いです！')
  }

  // if (danger.github.requested_reviewers.users.length === 0) {
  //   warn('レビュワーを指定してください')
  // }
}

checkBranchName(headBranch, baseBranch)
