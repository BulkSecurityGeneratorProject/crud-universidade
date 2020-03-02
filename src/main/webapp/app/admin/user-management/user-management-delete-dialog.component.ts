import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
import { User, UserService } from 'app/core';

@Component({
    selector: 'jhi-user-mgmt-delete-dialog',
    templateUrl: './user-management-delete-dialog.component.html'
})
export class UserMgmtDeleteDialogComponent {
    /*Objetos*/
    user: User;

    constructor(private userService: UserService, public activeModal: NgbActiveModal, private eventManager: JhiEventManager) {}

    /*--------CONFIGURACAO---------*/
    confirmDelete(login) {
        this.userService.delete(login).subscribe(response => {
            this.eventManager.broadcast({
                name: 'userListModification',
                content: 'Deleted a user'
            });
            this.activeModal.dismiss(true);
        });
    }
    /*-----------------------------*/

    /*-------CARREGAMENTO------*/
    clear() {
        this.activeModal.dismiss('cancel');
    }
    /*-------------------------*/
}
