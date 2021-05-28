import Vue from 'vue'
import { PluginFunction } from 'vue'
import { PushButton } from './PushButton'
import { ButtonGroup } from './ButtonGroup'

export function install (vue: typeof Vue): void

declare class TvButton {
  static install: PluginFunction<never>
  PushButton: PushButton
  ButtonGroup: ButtonGroup
}

export default TvButton
