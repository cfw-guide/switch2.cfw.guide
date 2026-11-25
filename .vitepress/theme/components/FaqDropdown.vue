<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  question: string
}>()

const details = ref<HTMLDetailsElement | null>(null)
const answer = ref<HTMLDivElement | null>(null)
let answerAnimation: Animation | undefined

function animateAnswer() {
  answerAnimation?.cancel()
  if (!details.value?.open || !answer.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  answerAnimation = answer.value.animate(
    [
      { opacity: 0, transform: 'translateY(-8px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ],
    { duration: 200, easing: 'ease-out' }
  )
}
</script>

<template>
  <details ref="details" class="faq-dropdown" @toggle="animateAnswer">
    <summary><span>{{ question }}</span></summary>
    <div ref="answer" class="faq-dropdown-answer">
      <slot />
    </div>
  </details>
</template>
