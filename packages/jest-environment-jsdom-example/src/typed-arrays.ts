// Copyright 2023-2025 Buf Technologies, Inc.
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

export function createTypedArrays() {
  return [
    new Int8Array(64),
    new Uint8Array(64),
    new Uint8ClampedArray(64),
    new Int16Array(64),
    new Uint16Array(64),
    new Int32Array(64),
    new Uint32Array(64),
    new Float32Array(64),
    new Float64Array(64),
    new BigInt64Array(64),
    new BigUint64Array(64),
  ];
}

export function createView() {
  const buffer = new ArrayBuffer(64);
  return new DataView(buffer);
}
