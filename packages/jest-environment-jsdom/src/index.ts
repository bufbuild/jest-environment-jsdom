// Copyright 2023-2024 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { TextDecoder, TextEncoder } from "util";
import JsdomEnvironment from "jest-environment-jsdom";

module.exports = class JsdomModernEnvironment extends JsdomEnvironment {
  override async setup() {
    await super.setup();

    if (
      this.global.TextEncoder !== undefined || // eslint-disable-line @typescript-eslint/no-unnecessary-condition
      this.global.TextDecoder !== undefined // eslint-disable-line @typescript-eslint/no-unnecessary-condition
    ) {
      // jest-environment-jsdom@29.6.1 does not provide either.
      // In case they are defined, bail out and do not change anything because
      // the underlying issue may have been fixed.
      return;
    }

    this.global.TextDecoder = TextDecoder as typeof this.global.TextDecoder;
    this.global.TextEncoder = TextEncoder;

    // restore for instanceof, see https://github.com/jestjs/jest/issues/9983
    this.global.Uint8Array = Uint8Array;
    this.global.ArrayBuffer = ArrayBuffer;
  }
};
