export type Branch = 'smilebasic' | 'civswitch'

export interface BranchPage {
  text: string
  link: string
}

export const branchPages: Record<Branch, BranchPage[]> = {
  smilebasic: [
    { text: 'Preparing SmileBasic', link: '/preparing-smilebasic/' },
    { text: 'Using 90DNS on Raspberry Pi Pico', link: '/using-90dns-on-pico-w/' },
    { text: 'Installing kaiHEN (SmileBasic)', link: '/installing-kaihen-(smilebasic)/' },
    { text: 'Using kaiHEN', link: '/using-kaihen/' }
  ],
  civswitch: [
    { text: 'Preparing CivSwitch', link: '/preparing-civswitch/' },
    { text: 'Using 90DNS on Raspberry Pi Pico', link: '/using-90dns-on-pico-w/' },
    { text: 'Installing the CivSwitch Trigger', link: '/installing-civswitch-trigger/' },
    { text: 'Installing kaiHEN (CivSwitch)', link: '/installing-kaihen-(civswitch)/' },
    { text: 'Using kaiHEN', link: '/using-kaihen/' }
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
