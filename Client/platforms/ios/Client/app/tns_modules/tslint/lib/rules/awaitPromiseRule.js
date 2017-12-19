"use strict";
/**
 * @license
 * Copyright 2017 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsutils_1 = require("tsutils");
var ts = require("typescript");
var Lint = require("../index");
var Rule = /** @class */ (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        var promiseTypes = new Set(["Promise"].concat(this.ruleArguments));
        return this.applyWithFunction(sourceFile, walk, promiseTypes, program.getTypeChecker());
    };
    /* tslint:disable:object-literal-sort-keys */
    Rule.metadata = {
        ruleName: "await-promise",
        description: "Warns for an awaited value that is not a Promise.",
        optionsDescription: (_a = ["\n            A list of 'string' names of any additional classes that should also be handled as Promises.\n        "], _a.raw = ["\n            A list of 'string' names of any additional classes that should also be handled as Promises.\n        "], Lint.Utils.dedent(_a)),
        options: {
            type: "list",
            listType: {
                type: "array",
                items: { type: "string" },
            },
        },
        optionExamples: [true, [true, "Thenable"]],
        type: "functionality",
        typescriptOnly: true,
        requiresTypeInfo: true,
    };
    /* tslint:enable:object-literal-sort-keys */
    Rule.FAILURE_STRING = "Invalid 'await' of a non-Promise value.";
    Rule.FAILURE_FOR_AWAIT_OF = "Invalid 'for-await-of' of a non-AsyncIterable value.";
    return Rule;
}(Lint.Rules.TypedRule));
exports.Rule = Rule;
function walk(ctx, tc) {
    var promiseTypes = ctx.options;
    return ts.forEachChild(ctx.sourceFile, cb);
    function cb(node) {
        if (tsutils_1.isAwaitExpression(node) && !containsType(tc.getTypeAtLocation(node.expression), isPromiseType)) {
            ctx.addFailureAtNode(node, Rule.FAILURE_STRING);
        }
        else if (tsutils_1.isForOfStatement(node) && node.awaitModifier !== undefined &&
            !containsType(tc.getTypeAtLocation(node.expression), isAsyncIterable)) {
            ctx.addFailureAtNode(node.expression, Rule.FAILURE_FOR_AWAIT_OF);
        }
        return ts.forEachChild(node, cb);
    }
    function isPromiseType(name) {
        return promiseTypes.has(name);
    }
}
function containsType(type, predicate) {
    if (Lint.isTypeFlagSet(type, ts.TypeFlags.Any) ||
        tsutils_1.isTypeReference(type) && type.target.symbol !== undefined && predicate(type.target.symbol.name)) {
        return true;
    }
    if (tsutils_1.isUnionOrIntersectionType(type)) {
        return type.types.some(function (t) { return containsType(t, predicate); });
    }
    var bases = type.getBaseTypes();
    return bases !== undefined && bases.some(function (t) { return containsType(t, predicate); });
}
function isAsyncIterable(name) {
    return name === "AsyncIterable" || name === "AsyncIterableIterator";
}
var _a;
