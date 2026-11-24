export type Branch = 'smilebasic' | 'civswitch'

export interface BranchPage {
  text: string
  link: string
}

export const branchPages: Record<Branch, BranchPage[]> = {
  smilebasic: [
    { text: 'Preparing SmileBasic', link: '/guide/preparing-smilebasic/' },
    { text: 'Using 90DNS on Pico 1/2 W', link: '/guide/using-90dns-on-pico-1-2-w/' },
    { text: 'Installing kaiHEN (SmileBasic)', link: '/guide/installing-kaihen-(smilebasic)/' },
    { text: 'Using kaiHEN (SmileBasic)', link: '/guide/using-kaihen-(smilebasic)/' }
  ],
  civswitch: [
    { text: 'Preparing CivSwitch', link: '/guide/preparing-civswitch/' },
    { text: 'Using 90DNS on Pico 1/2 W', link: '/guide/using-90dns-on-pico-1-2-w/' },
    { text: 'Installing the CivSwitch Trigger', link: '/guide/installing-civswitch-trigger/' },
    { text: 'Installing kaiHEN (CivSwitch)', link: '/guide/installing-kaihen-(civswitch)/' },
    { text: 'Using kaiHEN (CivSwitch)', link: '/guide/using-kaihen-(civswitch)/' }
  ]
}

export function detectBranch(path: string): Branch | null {
  if (path.includes('smilebasic')) return 'smilebasic'
  if (path.includes('civswitch')) return 'civswitch'
  return null
}

export function readBranchCookie(): Branch | null {
  if (typeof document === 'undefined') return null

  const match = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith('guide_branch='))
  const value = match?.split('=')[1]

  return value === 'smilebasic' || value === 'civswitch' ? value : null
}

export function setBranchCookie(branch: Branch) {
  if (typeof document !== 'undefined') {
    document.cookie = `guide_branch=${branch}; path=/; max-age=31536000; samesite=lax`
  }
}
