import Vue, { VNode } from 'vue'

export interface BWidthWrapSlots {
  default: VNode[],
  side: VNode[],
  main: VNode[]

  [key: string]: VNode[]
}

// todo
export declare interface BWidthWrap extends Vue {

  $slots: BWidthWrapSlots
}
