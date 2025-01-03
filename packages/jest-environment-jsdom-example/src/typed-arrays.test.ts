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

import { describe, expect, test } from "@jest/globals";
import { createTypedArrays, createView } from "./typed-arrays";

describe("typed arrays", () => {
  test("should be available", () => {
    const arrays = createTypedArrays();
    expect(arrays.length).toBe(11);
  });
  test("should be instanceof", () => {
    const [
      int8,
      uint8,
      uint8clamped,
      int16,
      uint16,
      int32,
      uint32,
      float32,
      float64,
      bigInt64,
      bigUint64,
    ] = createTypedArrays();
    expect(int8).toBeInstanceOf(Int8Array);
    expect(uint8).toBeInstanceOf(Uint8Array);
    expect(uint8clamped).toBeInstanceOf(Uint8ClampedArray);
    expect(int16).toBeInstanceOf(Int16Array);
    expect(uint16).toBeInstanceOf(Uint16Array);
    expect(int32).toBeInstanceOf(Int32Array);
    expect(uint32).toBeInstanceOf(Uint32Array);
    expect(float32).toBeInstanceOf(Float32Array);
    expect(float64).toBeInstanceOf(Float64Array);
    expect(bigInt64).toBeInstanceOf(BigInt64Array);
    expect(bigUint64).toBeInstanceOf(BigUint64Array);
  });
});

describe("data view", () => {
  test("should be available", () => {
    const view = createView();
    expect(view).toBeInstanceOf(DataView);
  });
});

describe("using jsdom in this test file", () => {
  test("still works", () => {
    const element = document.createElement("div");
    expect(element).not.toBeNull();
  });
});
