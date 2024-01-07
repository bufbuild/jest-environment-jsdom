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

import { describe, expect, test } from "@jest/globals";
import { decodeUtf8, encodeUtf8 } from "./encoding-api";

describe("text encoding API", () => {
  test("should encode", () => {
    const bytes = encodeUtf8("soirée 🎉");
    expect(bytes.buffer).toBeInstanceOf(ArrayBuffer);
    expect(bytes).toBeInstanceOf(Uint8Array);
    expect(bytes.length).toBe(12);
    expect(bytes).toStrictEqual(
      new Uint8Array([
        0x73, 0x6f, 0x69, 0x72, 0xc3, 0xa9, 0x65, 0x20, 0xf0, 0x9f, 0x8e, 0x89,
      ]),
    );
  });
  test("should decode", () => {
    const text = decodeUtf8(
      new Uint8Array([
        0x73, 0x6f, 0x69, 0x72, 0xc3, 0xa9, 0x65, 0x20, 0xf0, 0x9f, 0x8e, 0x89,
      ]),
    );
    expect(text).toBe("soirée 🎉");
  });
});

describe("using jsdom in this test file", () => {
  test("still works", () => {
    const element = document.createElement("div");
    expect(element).not.toBeNull();
  });
});
