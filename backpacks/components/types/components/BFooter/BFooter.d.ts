import Vue, { VNode } from 'vue'

export interface FooterSlots {
  default: VNode[],

  [key: string]: VNode[]
}

export declare interface BFooter extends Vue {
  $slots: FooterSlots
}
