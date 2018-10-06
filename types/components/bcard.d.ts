import Vue, { VNode } from 'vue'

export declare interface BCard extends Vue {
  $slots: {
    header: VNode[];
    footer: VNode[];
    '': VNode[];
  }
}
