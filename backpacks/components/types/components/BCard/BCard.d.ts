import Vue, { VNode } from 'vue'

export interface CardSlots {
  default: VNode[],

  [key: string]: VNode[]
}

export declare interface BCard extends Vue {
  tile: boolean

  $slots: CardSlots
}
