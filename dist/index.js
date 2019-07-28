import * as tslib_1 from "tslib";
import * as React from "react";
import * as Treeviz from "treeviz";
var TreevizReact = /** @class */ (function (_super) {
    tslib_1.__extends(TreevizReact, _super);
    function TreevizReact() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: "tree" + Math.floor(Math.random() * 1000000)
        };
        return _this;
    }
    TreevizReact.prototype.componentDidMount = function () {
        var _a = this.props, _b = _a.nodeWidth, nodeWidth = _b === void 0 ? 80 : _b, _c = _a.nodeHeight, nodeHeight = _c === void 0 ? 120 : _c, _d = _a.mainAxisNodeSpacing, mainAxisNodeSpacing = _d === void 0 ? 1.3 : _d, _e = _a.renderNode, renderNode = _e === void 0 ? function () { return ""; } : _e, _f = _a.onNodeClick, onNodeClick = _f === void 0 ? function () { return undefined; } : _f, _g = _a.onNodeMouseEnter, onNodeMouseEnter = _g === void 0 ? function () { return undefined; } : _g, _h = _a.onNodeMouseLeave, onNodeMouseLeave = _h === void 0 ? function () { return undefined; } : _h, _j = _a.duration, duration = _j === void 0 ? 700 : _j, _k = _a.isHorizontal, isHorizontal = _k === void 0 ? true : _k, _l = _a.hasFlatData, hasFlatData = _l === void 0 ? true : _l, _m = _a.secondaryAxisNodeSpacing, secondaryAxisNodeSpacing = _m === void 0 ? 1.25 : _m, _o = _a.hasPanAndZoom, hasPanAndZoom = _o === void 0 ? true : _o, _p = _a.relationnalField, relationnalField = _p === void 0 ? "father" : _p, _q = _a.linkWidth, linkWidth = _q === void 0 ? function () { return 3; } : _q, _r = _a.linkShape, linkShape = _r === void 0 ? "orthogonal" : _r, _s = _a.linkColor, linkColor = _s === void 0 ? function () { return "#dddddd"; } : _s, _t = _a.idKey, idKey = _t === void 0 ? "id" : _t;
        // @ts-ignore
        this.treeviz = Treeviz.create({
            // @ts-ignore
            htmlId: this.state.id,
            idKey: idKey,
            nodeWidth: nodeWidth,
            nodeHeight: nodeHeight,
            mainAxisNodeSpacing: mainAxisNodeSpacing,
            renderNode: renderNode,
            onNodeClick: onNodeClick,
            onNodeMouseEnter: onNodeMouseEnter,
            onNodeMouseLeave: onNodeMouseLeave,
            duration: duration,
            isHorizontal: isHorizontal,
            hasFlatData: hasFlatData,
            secondaryAxisNodeSpacing: secondaryAxisNodeSpacing,
            hasPanAndZoom: hasPanAndZoom,
            relationnalField: relationnalField,
            linkWidth: linkWidth,
            linkShape: linkShape,
            linkColor: linkColor
        });
        // @ts-ignore
        this.treeviz.refresh(this.props.data);
    };
    TreevizReact.prototype.componentDidUpdate = function () {
        // @ts-ignore
        this.treeviz.refresh(this.props.data, this.props);
    };
    TreevizReact.prototype.render = function () {
        return React.createElement("div", { id: this.state.id, style: { width: 800, height: 500 } });
    };
    return TreevizReact;
}(React.Component));
export { TreevizReact };
//# sourceMappingURL=index.js.map