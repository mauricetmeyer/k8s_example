/**
 * global.d.ts
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * (c) Laviréo. All rights reserved.
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 */

declare var env: Record<string, string>;
declare var process: {
  env: Record<string, string>;
}

declare interface Window {
  WebKitMediaSource?: MediaSource;
}

declare interface Document {
  mozCancelFullScreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  webkitExitFullscreen?: () => Promise<void>;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
}

declare interface HTMLElement {
  msRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  webkitRequestFullscreen?: () => Promise<void>;
}

declare interface VideoPlaybackQuality {
  readonly creationTime: number;
  readonly corruptedVideoFrames: number;
  readonly droppedVideoFrames: number;
  readonly totalVideoFrames: number;
}

declare interface HTMLVideoElement {
  webkitDecodedFrameCount?: number;
  webkitDroppedFrameCount?: number;
  getVideoPlaybackQuality: () => VideoPlaybackQuality;
}
