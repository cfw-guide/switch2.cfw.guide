<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, type CSSProperties } from 'vue'

const props = defineProps<{
  term: string
}>()

const open = ref(false)
const triggerRef = ref<HTMLButtonElement>()
const tooltipRef = ref<HTMLSpanElement>()
const tooltipStyle = ref<CSSProperties>({})
const tooltipId = computed(
  () => `definition-${props.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
)

function toggle() {
  open.value = !open.value
  if (open.value) positionTooltip()
}

function close() {
  open.value = false
}

async function positionTooltip() {
  await nextTick()

  const trigger = triggerRef.value
  const tooltip = tooltipRef.value
  if (!trigger || !tooltip) return

  const triggerRect = trigger.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()
  const viewportWidth = document.documentElement.clientWidth
  const viewportHeight = document.documentElement.clientHeight
  const edgeGap = 12
  const gap = 8
  const width = tooltipRect.width

  let left = triggerRect.left + (triggerRect.width - width) / 2
  left = Math.max(edgeGap, Math.min(left, viewportWidth - width - edgeGap))

  const triggerCenter = triggerRect.left + triggerRect.width / 2
  const arrowLeft = Math.max(8, Math.min(width - 8, triggerCenter - left))

  let top = triggerRect.top - tooltipRect.height - gap
  if (top < edgeGap) top = triggerRect.bottom + gap
  top = Math.max(edgeGap, Math.min(top, viewportHeight - tooltipRect.height - edgeGap))

  tooltipStyle.value = {
    left: `${left}px`,
    top: `${top}px`,
    bottom: 'auto',
    '--tooltip-arrow-left': `${arrowLeft}px`,
  } as CSSProperties
}

function handleViewportChange() {
  if (open.value) positionTooltip()
}

function handleOutsidePointer(event: PointerEvent) {
  if (!open.value) return

  const target = event.target
  if (!(target instanceof Node)) return

  if (!triggerRef.value?.contains(target) && !tooltipRef.value?.contains(target)) {
    close()
    triggerRef.value?.blur()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleViewportChange)
  window.addEventListener('scroll', handleViewportChange, true)
  document.addEventListener('pointerdown', handleOutsidePointer)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleViewportChange)
  window.removeEventListener('scroll', handleViewportChange, true)
  document.removeEventListener('pointerdown', handleOutsidePointer)
})
</script>

<template>
  <span class="definition" :class="{ 'is-open': open }">
    <button
      ref="triggerRef"
      class="definition-trigger"
      type="button"
      :aria-label="`Show definition of ${term}`"
      :aria-expanded="open"
      :aria-describedby="tooltipId"
      @click="toggle"
      @keydown.esc="close"
      @blur="close"
      @mouseenter="positionTooltip"
      @focus="positionTooltip"
    >
      {{ term }}
    </button>
    <span
      :id="tooltipId"
      ref="tooltipRef"
      class="definition-tooltip"
      :style="tooltipStyle"
      role="tooltip"
    >
      <slot />
    </span>
  </span>
</template>
