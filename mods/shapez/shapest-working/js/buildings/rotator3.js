import { SzDefinition } from "../shapest/definition.js";
import { defaultBuildingVariant, enumItemProcessorTypes, enumRotaterVariants, formatItemsPerSecond, MetaRotaterBuilding, MOD_ITEM_PROCESSOR_HANDLERS, MOD_ITEM_PROCESSOR_SPEEDS, T, Vector } from "../shapez.js";
import { RESOURCES } from "../types/common.js";
const var41 = defaultBuildingVariant;
const var42 = enumRotaterVariants.ccw;
const var180 = enumRotaterVariants.rotate180;
const var31 = 'rotator-three-right';
const var32 = 'rotator-three-left';
export class Rotator3 {
    static process_rotate31_cache = new Map();
    static process_rotate32_cache = new Map();
    static processOrCached(cache, hash, process) {
        let v = cache.get(hash);
        if (!v)
            cache.set(hash, v = process());
        return v;
    }
    static process_31(payload) {
        const push = (d) => payload.outItems.push({ item: payload.entity.root.shapeDefinitionMgr.getShapeItemFromDefinition(d) });
        let item = payload.items.get(0);
        let def = () => item.definition instanceof SzDefinition ? item.definition
            : SzDefinition.fromRawShape(item.definition);
        push(Rotator3.processOrCached(Rotator3.process_rotate31_cache, item.definition.getHash(), () => def().cloneRotate24(8)));
    }
    static process_32(payload) {
        const push = (d) => payload.outItems.push({ item: payload.entity.root.shapeDefinitionMgr.getShapeItemFromDefinition(d) });
        let item = payload.items.get(0);
        let def = () => item.definition instanceof SzDefinition ? item.definition
            : SzDefinition.fromRawShape(item.definition);
        push(Rotator3.processOrCached(Rotator3.process_rotate31_cache, item.definition.getHash(), () => def().cloneRotate24(24 - 8)));
    }
    static install(mod) {
        Object.assign(enumRotaterVariants, {
            [var31]: var31,
            [var32]: var32,
        });
        mod.modInterface.addVariantToExistingBuilding(
        // @ts-ignore
        MetaRotaterBuilding, var31, {
            name: "Cutter (Mirrored)",
            description: "A mirrored cutter",
            tutorialImageBase64: RESOURCES.rotate31,
            regularSpriteBase64: RESOURCES.rotate31,
            blueprintSpriteBase64: RESOURCES.rotate31,
            dimensions: new Vector(1, 1),
            additionalStatistics(root) {
                const speed = root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.rotater);
                return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed),],
                ];
            },
            // isUnlocked(root) {
            // 	return true;
            // },
        });
        mod.modInterface.addVariantToExistingBuilding(
        // @ts-ignore
        MetaRotaterBuilding, var32, {
            name: "Cutter (Mirrored)",
            description: "A mirrored cutter",
            tutorialImageBase64: RESOURCES.rotate32,
            regularSpriteBase64: RESOURCES.rotate32,
            blueprintSpriteBase64: RESOURCES.rotate32,
            dimensions: new Vector(1, 1),
            additionalStatistics(root) {
                const speed = root.hubGoals.getProcessorBaseSpeed(enumItemProcessorTypes.rotater);
                return [[T.ingame.buildingPlacement.infoTexts.speed, formatItemsPerSecond(speed),],
                ];
            },
            // isUnlocked(root) {
            // 	return true;
            // },
        });
        // Extend instance methods
        mod.modInterface.extendClass(MetaRotaterBuilding, ({ $old }) => ({
            updateVariants(entity, rotationVariant, variant) {
                if (variant === var31) {
                    entity.components.ItemProcessor.type = var31;
                }
                else if (variant === var32) {
                    entity.components.ItemProcessor.type = var32;
                }
                else {
                    $old.updateVariants.call(this, entity, rotationVariant, variant);
                }
            },
            getAvailableVariants(root) {
                let vars = [];
                if (root.hubGoals.isRewardUnlocked('reward_rotater')) {
                    vars.push(var41, var42);
                }
                if (root.hubGoals.isRewardUnlocked('reward_rotater_ccw')) {
                    vars.push(var31, var32);
                }
                if (root.hubGoals.isRewardUnlocked('reward_rotater_180')) {
                    vars.push(var180);
                }
                return vars;
            },
        }));
        function registerProcessor(variant, speed, processor) {
            Object.assign(enumItemProcessorTypes, {
                [variant]: variant
            });
            Object.assign(MOD_ITEM_PROCESSOR_SPEEDS, {
                [variant]: (root) => root.hubGoals.getProcessorBaseSpeed(speed)
            });
            Object.assign(MOD_ITEM_PROCESSOR_HANDLERS, {
                [variant]: processor
            });
        }
        registerProcessor(var31, 'rotater', Rotator3.process_31);
        registerProcessor(var32, 'rotater', Rotator3.process_32);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRvcjMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYnVpbGRpbmdzL3JvdGF0b3IzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQVksbUJBQW1CLEVBQU8sMkJBQTJCLEVBQUUseUJBQXlCLEVBQThELENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDNVIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRy9DLE1BQU0sS0FBSyxHQUFHLHNCQUFzQixDQUFDO0FBQ3JDLE1BQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFDLEdBQUcsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxTQUFTLENBQUM7QUFFN0MsTUFBTSxLQUFLLEdBQUcscUJBQXFCLENBQUM7QUFDcEMsTUFBTSxLQUFLLEdBQUcsb0JBQW9CLENBQUM7QUFFbkMsTUFBTSxPQUFPLFFBQVE7SUFHcEIsTUFBTSxDQUFDLHNCQUFzQixHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBQ2hFLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztJQUNoRSxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQWdDLEVBQUUsSUFBWSxFQUFFLE9BQTJCO1FBQ2pHLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLENBQUM7WUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7SUFHRCxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQXVD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QixFQUFFO2dCQUMxQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVM7YUFDcEIsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztRQUVELGlCQUFpQixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pELGlCQUFpQixDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBTTFELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTekRlZmluaXRpb24gfSBmcm9tIFwiLi4vc2hhcGVzdC9kZWZpbml0aW9uLmpzXCI7XHJcbmltcG9ydCB7IFN6U2hhcGVJdGVtIH0gZnJvbSBcIi4uL3NoYXBlc3QvaXRlbS5qc1wiO1xyXG5pbXBvcnQgeyBkZWZhdWx0QnVpbGRpbmdWYXJpYW50LCBlbnVtSXRlbVByb2Nlc3NvclR5cGVzLCBlbnVtUm90YXRlclZhcmlhbnRzLCBmb3JtYXRJdGVtc1BlclNlY29uZCwgR2FtZVJvb3QsIE1ldGFSb3RhdGVyQnVpbGRpbmcsIE1vZCwgTU9EX0lURU1fUFJPQ0VTU09SX0hBTkRMRVJTLCBNT0RfSVRFTV9QUk9DRVNTT1JfU1BFRURTLCBQcm9jZXNzb3JJbXBsZW1lbnRhdGlvblBheWxvYWQsIFNoYXBlRGVmaW5pdGlvbiwgU2hhcGVJdGVtLCBULCBWZWN0b3IgfSBmcm9tIFwiLi4vc2hhcGV6LmpzXCI7XHJcbmltcG9ydCB7IFJFU09VUkNFUyB9IGZyb20gXCIuLi90eXBlcy9jb21tb24uanNcIjtcclxuXHJcblxyXG5jb25zdCB2YXI0MSA9IGRlZmF1bHRCdWlsZGluZ1ZhcmlhbnQ7XHJcbmNvbnN0IHZhcjQyID0gZW51bVJvdGF0ZXJWYXJpYW50cy5jY3c7XHJcbmNvbnN0IHZhcjE4MCA9IGVudW1Sb3RhdGVyVmFyaWFudHMucm90YXRlMTgwO1xyXG5cclxuY29uc3QgdmFyMzEgPSAncm90YXRvci10aHJlZS1yaWdodCc7XHJcbmNvbnN0IHZhcjMyID0gJ3JvdGF0b3ItdGhyZWUtbGVmdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRvcjMge1xyXG5cclxuXHJcblx0c3RhdGljIHByb2Nlc3Nfcm90YXRlMzFfY2FjaGUgPSBuZXcgTWFwPHN0cmluZywgU3pEZWZpbml0aW9uPigpO1xyXG5cdHN0YXRpYyBwcm9jZXNzX3JvdGF0ZTMyX2NhY2hlID0gbmV3IE1hcDxzdHJpbmcsIFN6RGVmaW5pdGlvbj4oKTtcclxuXHRzdGF0aWMgcHJvY2Vzc09yQ2FjaGVkKGNhY2hlOiBNYXA8c3RyaW5nLCBTekRlZmluaXRpb24+LCBoYXNoOiBzdHJpbmcsIHByb2Nlc3M6ICgpID0+IFN6RGVmaW5pdGlvbik6IFN6RGVmaW5pdGlvbiB7XHJcblx0XHRsZXQgdiA9IGNhY2hlLmdldChoYXNoKTtcclxuXHRcdGlmICghdikgY2FjaGUuc2V0KGhhc2gsIHYgPSBwcm9jZXNzKCkpO1xyXG5cdFx0cmV0dXJuIHY7XHJcblx0fVxyXG5cclxuXHJcblx0c3RhdGljIHByb2Nlc3NfMzEocGF5bG9hZDogUHJvY2Vzc29ySW1wbGVtZW50YXRpb25QYXlsb2FkKSB7XHJcblx0XHRjb25zdCBwdXNoID0gKGQ6IFNoYXBlRGVmaW5pdGlvbikgPT4gcGF5bG9hZC5vdXRJdGVtcy5wdXNoKHsgaXRlbTogcGF5bG9hZC5lbnRpdHkucm9vdC5zaGFwZURlZmluaXRpb25NZ3IuZ2V0U2hhcGVJdGVtRnJvbURlZmluaXRpb24oZCkgfSk7XHJcblx0XHRsZXQgaXRlbSA9IHBheWxvYWQuaXRlbXMuZ2V0KDApIGFzIFNoYXBlSXRlbSB8IFN6U2hhcGVJdGVtO1xyXG5cdFx0bGV0IGRlZiA9ICgpID0+IGl0ZW0uZGVmaW5pdGlvbiBpbnN0YW5jZW9mIFN6RGVmaW5pdGlvbiA/IGl0ZW0uZGVmaW5pdGlvblxyXG5cdFx0XHQ6IFN6RGVmaW5pdGlvbi5mcm9tUmF3U2hhcGUoaXRlbS5kZWZpbml0aW9uKTtcclxuXHRcdHB1c2goXHJcblx0XHRcdFJvdGF0b3IzLnByb2Nlc3NPckNhY2hlZChcclxuXHRcdFx0XHRSb3RhdG9yMy5wcm9jZXNzX3JvdGF0ZTMxX2NhY2hlLFxyXG5cdFx0XHRcdGl0ZW0uZGVmaW5pdGlvbi5nZXRIYXNoKCksXHJcblx0XHRcdFx0KCkgPT4gZGVmKCkuY2xvbmVSb3RhdGUyNCg4KSxcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBwcm9jZXNzXzMyKHBheWxvYWQ6IFByb2Nlc3NvckltcGxlbWVudGF0aW9uUGF5bG9hZCkge1xyXG5cdFx0Y29uc3QgcHVzaCA9IChkOiBTaGFwZURlZmluaXRpb24pID0+IHBheWxvYWQub3V0SXRlbXMucHVzaCh7IGl0ZW06IHBheWxvYWQuZW50aXR5LnJvb3Quc2hhcGVEZWZpbml0aW9uTWdyLmdldFNoYXBlSXRlbUZyb21EZWZpbml0aW9uKGQpIH0pO1xyXG5cdFx0bGV0IGl0ZW0gPSBwYXlsb2FkLml0ZW1zLmdldCgwKSBhcyBTaGFwZUl0ZW0gfCBTelNoYXBlSXRlbTtcclxuXHRcdGxldCBkZWYgPSAoKSA9PiBpdGVtLmRlZmluaXRpb24gaW5zdGFuY2VvZiBTekRlZmluaXRpb24gPyBpdGVtLmRlZmluaXRpb25cclxuXHRcdFx0OiBTekRlZmluaXRpb24uZnJvbVJhd1NoYXBlKGl0ZW0uZGVmaW5pdGlvbik7XHJcblx0XHRwdXNoKFxyXG5cdFx0XHRSb3RhdG9yMy5wcm9jZXNzT3JDYWNoZWQoXHJcblx0XHRcdFx0Um90YXRvcjMucHJvY2Vzc19yb3RhdGUzMV9jYWNoZSxcclxuXHRcdFx0XHRpdGVtLmRlZmluaXRpb24uZ2V0SGFzaCgpLFxyXG5cdFx0XHRcdCgpID0+IGRlZigpLmNsb25lUm90YXRlMjQoMjQgLSA4KSxcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0c3RhdGljIGluc3RhbGwobW9kOiBNb2QpIHtcclxuXHJcblx0XHRPYmplY3QuYXNzaWduKGVudW1Sb3RhdGVyVmFyaWFudHMsIHtcclxuXHRcdFx0W3ZhcjMxXTogdmFyMzEsXHJcblx0XHRcdFt2YXIzMl06IHZhcjMyLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bW9kLm1vZEludGVyZmFjZS5hZGRWYXJpYW50VG9FeGlzdGluZ0J1aWxkaW5nKFxyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdE1ldGFSb3RhdGVyQnVpbGRpbmcsXHJcblx0XHRcdHZhcjMxLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJDdXR0ZXIgKE1pcnJvcmVkKVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkEgbWlycm9yZWQgY3V0dGVyXCIsXHJcblxyXG5cdFx0XHRcdHR1dG9yaWFsSW1hZ2VCYXNlNjQ6IFJFU09VUkNFUy5yb3RhdGUzMSxcclxuXHRcdFx0XHRyZWd1bGFyU3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlMzEsXHJcblx0XHRcdFx0Ymx1ZXByaW50U3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlMzEsXHJcblxyXG5cdFx0XHRcdGRpbWVuc2lvbnM6IG5ldyBWZWN0b3IoMSwgMSksXHJcblxyXG5cdFx0XHRcdGFkZGl0aW9uYWxTdGF0aXN0aWNzKHJvb3QpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNwZWVkID0gcm9vdC5odWJHb2Fscy5nZXRQcm9jZXNzb3JCYXNlU3BlZWQoZW51bUl0ZW1Qcm9jZXNzb3JUeXBlcy5yb3RhdGVyKTtcclxuXHRcdFx0XHRcdHJldHVybiBbW1QuaW5nYW1lLmJ1aWxkaW5nUGxhY2VtZW50LmluZm9UZXh0cy5zcGVlZCwgZm9ybWF0SXRlbXNQZXJTZWNvbmQoc3BlZWQpLF0sXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gaXNVbmxvY2tlZChyb290KSB7XHJcblx0XHRcdFx0Ly8gXHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHQvLyB9LFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0bW9kLm1vZEludGVyZmFjZS5hZGRWYXJpYW50VG9FeGlzdGluZ0J1aWxkaW5nKFxyXG5cdFx0XHQvLyBAdHMtaWdub3JlXHJcblx0XHRcdE1ldGFSb3RhdGVyQnVpbGRpbmcsXHJcblx0XHRcdHZhcjMyLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bmFtZTogXCJDdXR0ZXIgKE1pcnJvcmVkKVwiLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIkEgbWlycm9yZWQgY3V0dGVyXCIsXHJcblxyXG5cdFx0XHRcdHR1dG9yaWFsSW1hZ2VCYXNlNjQ6IFJFU09VUkNFUy5yb3RhdGUzMixcclxuXHRcdFx0XHRyZWd1bGFyU3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlMzIsXHJcblx0XHRcdFx0Ymx1ZXByaW50U3ByaXRlQmFzZTY0OiBSRVNPVVJDRVMucm90YXRlMzIsXHJcblxyXG5cdFx0XHRcdGRpbWVuc2lvbnM6IG5ldyBWZWN0b3IoMSwgMSksXHJcblxyXG5cdFx0XHRcdGFkZGl0aW9uYWxTdGF0aXN0aWNzKHJvb3QpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHNwZWVkID0gcm9vdC5odWJHb2Fscy5nZXRQcm9jZXNzb3JCYXNlU3BlZWQoZW51bUl0ZW1Qcm9jZXNzb3JUeXBlcy5yb3RhdGVyKTtcclxuXHRcdFx0XHRcdHJldHVybiBbW1QuaW5nYW1lLmJ1aWxkaW5nUGxhY2VtZW50LmluZm9UZXh0cy5zcGVlZCwgZm9ybWF0SXRlbXNQZXJTZWNvbmQoc3BlZWQpLF0sXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8gaXNVbmxvY2tlZChyb290KSB7XHJcblx0XHRcdFx0Ly8gXHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHQvLyB9LFxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cclxuXHRcdC8vIEV4dGVuZCBpbnN0YW5jZSBtZXRob2RzXHJcblx0XHRtb2QubW9kSW50ZXJmYWNlLmV4dGVuZENsYXNzKE1ldGFSb3RhdGVyQnVpbGRpbmcsICh7ICRvbGQgfSkgPT4gKHtcclxuXHRcdFx0dXBkYXRlVmFyaWFudHMoZW50aXR5OiB7IGNvbXBvbmVudHM6IHsgSXRlbVByb2Nlc3NvcjogeyB0eXBlOiBzdHJpbmc7IH07IH07IH0sIHJvdGF0aW9uVmFyaWFudDogYW55LCB2YXJpYW50OiBzdHJpbmcpIHtcclxuXHRcdFx0XHRpZiAodmFyaWFudCA9PT0gdmFyMzEpIHtcclxuXHRcdFx0XHRcdGVudGl0eS5jb21wb25lbnRzLkl0ZW1Qcm9jZXNzb3IudHlwZSA9IHZhcjMxO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodmFyaWFudCA9PT0gdmFyMzIpIHtcclxuXHRcdFx0XHRcdGVudGl0eS5jb21wb25lbnRzLkl0ZW1Qcm9jZXNzb3IudHlwZSA9IHZhcjMyO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkb2xkLnVwZGF0ZVZhcmlhbnRzLmNhbGwodGhpcywgZW50aXR5LCByb3RhdGlvblZhcmlhbnQsIHZhcmlhbnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0QXZhaWxhYmxlVmFyaWFudHMocm9vdDogR2FtZVJvb3QpIHtcclxuXHRcdFx0XHRsZXQgdmFycyA9IFtdO1xyXG5cdFx0XHRcdGlmIChyb290Lmh1YkdvYWxzLmlzUmV3YXJkVW5sb2NrZWQoJ3Jld2FyZF9yb3RhdGVyJykpIHtcclxuXHRcdFx0XHRcdHZhcnMucHVzaCh2YXI0MSwgdmFyNDIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocm9vdC5odWJHb2Fscy5pc1Jld2FyZFVubG9ja2VkKCdyZXdhcmRfcm90YXRlcl9jY3cnKSkge1xyXG5cdFx0XHRcdFx0dmFycy5wdXNoKHZhcjMxLCB2YXIzMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyb290Lmh1YkdvYWxzLmlzUmV3YXJkVW5sb2NrZWQoJ3Jld2FyZF9yb3RhdGVyXzE4MCcpKSB7XHJcblx0XHRcdFx0XHR2YXJzLnB1c2godmFyMTgwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHZhcnM7XHJcblx0XHRcdH0sXHJcblx0XHR9KSk7XHJcblxyXG5cclxuXHRcdGZ1bmN0aW9uIHJlZ2lzdGVyUHJvY2Vzc29yKHZhcmlhbnQ6IHN0cmluZywgc3BlZWQ6IGtleW9mIGVudW1JdGVtUHJvY2Vzc29yVHlwZXMsIHByb2Nlc3NvcjogKHBheWxvYWQ6IFByb2Nlc3NvckltcGxlbWVudGF0aW9uUGF5bG9hZCkgPT4gdm9pZCkge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKGVudW1JdGVtUHJvY2Vzc29yVHlwZXMsIHtcclxuXHRcdFx0XHRbdmFyaWFudF06IHZhcmlhbnRcclxuXHRcdFx0fSk7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24oTU9EX0lURU1fUFJPQ0VTU09SX1NQRUVEUywge1xyXG5cdFx0XHRcdFt2YXJpYW50XTogKHJvb3Q6IEdhbWVSb290KSA9PiByb290Lmh1YkdvYWxzLmdldFByb2Nlc3NvckJhc2VTcGVlZChzcGVlZClcclxuXHRcdFx0fSk7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24oTU9EX0lURU1fUFJPQ0VTU09SX0hBTkRMRVJTLCB7XHJcblx0XHRcdFx0W3ZhcmlhbnRdOiBwcm9jZXNzb3JcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHRyZWdpc3RlclByb2Nlc3Nvcih2YXIzMSwgJ3JvdGF0ZXInLCBSb3RhdG9yMy5wcm9jZXNzXzMxKTtcclxuXHRcdHJlZ2lzdGVyUHJvY2Vzc29yKHZhcjMyLCAncm90YXRlcicsIFJvdGF0b3IzLnByb2Nlc3NfMzIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblx0fVxyXG59XHJcbiJdfQ==