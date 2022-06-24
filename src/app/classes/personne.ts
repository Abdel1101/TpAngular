export class Personne {

    private _num: number; private _nom: string; private _prenom: string;
    constructor(_num: number, _nom: string, _prenom: string){
        this._num=_num; this._nom= _nom; this._prenom= _prenom;
    }

    get num(){
        return this.num;
        }
        set num(_num: number){
        this._num = _num;
        }
        get nom(){
        return this._nom;
        }
        set nom(_nom: string){
        this.nom = _nom;
        }
        get prenom(){
        return this._prenom;
        }
        set prenom(_prenom: string){
        this._prenom = _prenom;
        }
}
