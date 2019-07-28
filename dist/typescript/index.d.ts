import * as React from "react";
import { ExtendedHierarchyPointNode } from "treeviz/dist/typescript/typings";
declare type NodeType = ExtendedHierarchyPointNode & {
    x0: number;
    y0: number;
    settings: {
        nodeWidth: number;
        nodeHeight: number;
        duration: number;
    };
};
interface ITreeConfig {
    data: any[];
    idKey: string;
    relationnalField: string;
    hasFlatData: boolean;
    nodeWidth: number;
    nodeHeight: number;
    mainAxisNodeSpacing: number | "auto";
    secondaryAxisNodeSpacing: number;
    renderNode: (node: NodeType) => string | null;
    nodeColor: (node: NodeType) => string;
    linkShape: string;
    linkColor: (node: NodeType) => string;
    linkWidth: (node: NodeType) => number;
    onNodeClick: (node: NodeType) => void;
    onNodeMouseEnter: (node: NodeType) => void;
    onNodeMouseLeave: (node: NodeType) => void;
    isHorizontal: boolean;
    hasPanAndZoom: boolean;
    duration: number;
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
}
export declare class TreevizReact extends React.Component<Partial<ITreeConfig>> {
    state: {
        id: string;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export {};
