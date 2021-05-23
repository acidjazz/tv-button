import Vue from 'vue'
import { PluginFunction } from 'vue'
import { PushButton } from './PushButton'

export function install (vue: typeof Vue): void

declare class TvButton {
  static install: PluginFunction<never>
  PushButton: PushButton
}

export default TvButton
