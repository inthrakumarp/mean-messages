/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './error.component';
import * as i3 from './error.service';
const styles_ErrorComponent:any[] = ['.backdrop[_ngcontent-%COMP%] {\n                background-color: rgb(0, 0, 0, 0.6);\n                position: fixed;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100vh;\n            }'];
export const RenderType_ErrorComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_ErrorComponent,data:{}});
export function View_ErrorComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'div',[['class',
      'backdrop']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(['display']),
      (_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          31,'div',[['class','modal'],['role','dialog'],['tabindex','-1']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,
          (null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
          {ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(['display']),(_l()(),i0.ɵted((null as any),
          ['\n  '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),26,'div',[['class',
          'modal-dialog'],['role','document']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),23,'div',[['class','modal-content']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),8,'div',[['class','modal-header']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'button',
          [['aria-label','Close'],['class','close'],['type','button']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'span',[['aria-hidden','true']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['×'])),(_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'h4',[['class','modal-title']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class',
          'modal-body']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['',''])),(_l()(),
          i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵted((null as any),['\n      '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',[['class','modal-footer']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'button',[['class','btn btn-default'],['type','button']],
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.ErrorComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onErrorHandled()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Close'])),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵted((null as any),['\n    '])),
      (_l()(),i0.ɵted((null as any),['\n  '])),(_l()(),i0.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i2.ErrorComponent = _v.component;
        const currVal_0:any = _ck(_v,2,0,_co.display);
        _ck(_v,1,0,currVal_0);
        const currVal_1:any = _ck(_v,6,0,_co.display);
        _ck(_v,5,0,currVal_1);
      },(_ck,_v) => {
        var _co:i2.ErrorComponent = _v.component;
        const currVal_2:any = ((_co.error == null)? (null as any): _co.error.title);
        _ck(_v,19,0,currVal_2);
        const currVal_3:any = ((_co.error == null)? (null as any): _co.error.message);
        _ck(_v,25,0,currVal_3);
      });
}
export function View_ErrorComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'app-error',([] as any[]),
      (null as any),(null as any),(null as any),View_ErrorComponent_0,RenderType_ErrorComponent)),
      i0.ɵdid(114688,(null as any),0,i2.ErrorComponent,[i3.ErrorService],(null as any),
          (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ErrorComponentNgFactory:i0.ComponentFactory<i2.ErrorComponent> = i0.ɵccf('app-error',
    i2.ErrorComponent,View_ErrorComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiYzovaW50aHJhL21lYW4tbWVzc2FnZXMvYXNzZXRzL2FwcC9lcnJvcnMvZXJyb3IuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2M6L2ludGhyYS9tZWFuLW1lc3NhZ2VzL2Fzc2V0cy9hcHAvZXJyb3JzL2Vycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vL2M6L2ludGhyYS9tZWFuLW1lc3NhZ2VzL2Fzc2V0cy9hcHAvZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vYzovaW50aHJhL21lYW4tbWVzc2FnZXMvYXNzZXRzL2FwcC9lcnJvcnMvZXJyb3IuY29tcG9uZW50LnRzLkVycm9yQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JyA6IGRpc3BsYXl9XCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JyA6IGRpc3BsYXl9XCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7IGVycm9yPy50aXRsZX19PC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgPHA+e3tlcnJvcj8uIG1lc3NhZ2V9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkVycm9ySGFuZGxlZCgpXCIgID5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1jb250ZW50IC0tPlxyXG4gIDwvZGl2PjwhLS0gLy5tb2RhbC1kaWFsb2cgLS0+XHJcbjwvZGl2PjwhLS0gLy5tb2RhbCAtLT4iLCI8YXBwLWVycm9yPjwvYXBwLWVycm9yPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDQUE7TUFBQTthQUFBO3FCQUFBLGdEQUFzQjtNQUF3Qyx1Q0FDOUQ7VUFBQTtVQUFBLGlFQUFBO1VBQUE7VUFBQSw4Q0FBK0MsY0FBa0M7VUFBQSxXQUMvRTtVQUFBO1VBQUEsOEJBQTBDO01BQ3hDO1VBQUE7TUFBMkIsNkNBQ3pCO1VBQUE7VUFBQSw0Q0FBMEI7VUFBQSxpQkFDeEI7VUFBQTtVQUFBLDBEQUF3RDtVQUFBO1VBQUEsMERBQXlCO1VBQUEsUUFBdUIsK0NBQ3hHO1VBQUE7VUFBQSwwREFBd0I7VUFBQSxVQUFzQiw2Q0FDMUM7VUFBQSxlQUNOO1VBQUE7TUFBd0IsK0NBQ3RCO1VBQUE7VUFBQSw4QkFBRyx3Q0FBdUI7aUJBQUEsOEJBQ3RCO01BQ047VUFBQTtNQUEwQiwrQ0FDeEI7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUE4QztjQUFBO2NBQUE7WUFBQTtZQUE5QztVQUFBLGdDQUEyRTtNQUFjLDZDQUNyRjtNQUNzQix5Q0FDSDs7O1FBZlQ7UUFBdEIsV0FBc0IsU0FBdEI7UUFDK0M7UUFBL0MsV0FBK0MsU0FBL0M7OztRQUtnQztRQUFBO1FBR3JCO1FBQUE7Ozs7b0JDVFg7TUFBQTthQUFBO1VBQUE7SUFBQTs7OzsifQ==
