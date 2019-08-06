'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">doconline documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-7483f2ae841c1fb6ba909878508e469a"' : 'data-target="#xs-controllers-links-module-AppModule-7483f2ae841c1fb6ba909878508e469a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-7483f2ae841c1fb6ba909878508e469a"' :
                                            'id="xs-controllers-links-module-AppModule-7483f2ae841c1fb6ba909878508e469a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link">DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DoctorModule.html" data-type="entity-link">DoctorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DoctorModule-fa4eedb4e65d4cecf17951c753a0bf6f"' : 'data-target="#xs-controllers-links-module-DoctorModule-fa4eedb4e65d4cecf17951c753a0bf6f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DoctorModule-fa4eedb4e65d4cecf17951c753a0bf6f"' :
                                            'id="xs-controllers-links-module-DoctorModule-fa4eedb4e65d4cecf17951c753a0bf6f"' }>
                                            <li class="link">
                                                <a href="controllers/DoctorController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DoctorController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DoctorModule-fa4eedb4e65d4cecf17951c753a0bf6f"' : 'data-target="#xs-injectables-links-module-DoctorModule-fa4eedb4e65d4cecf17951c753a0bf6f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DoctorModule-fa4eedb4e65d4cecf17951c753a0bf6f"' :
                                        'id="xs-injectables-links-module-DoctorModule-fa4eedb4e65d4cecf17951c753a0bf6f"' }>
                                        <li class="link">
                                            <a href="injectables/DoctorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DoctorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExamModule.html" data-type="entity-link">ExamModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ExamModule-ded2ff7f259c103a57504d28f14e30a3"' : 'data-target="#xs-controllers-links-module-ExamModule-ded2ff7f259c103a57504d28f14e30a3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ExamModule-ded2ff7f259c103a57504d28f14e30a3"' :
                                            'id="xs-controllers-links-module-ExamModule-ded2ff7f259c103a57504d28f14e30a3"' }>
                                            <li class="link">
                                                <a href="controllers/ExamController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExamController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ExamModule-ded2ff7f259c103a57504d28f14e30a3"' : 'data-target="#xs-injectables-links-module-ExamModule-ded2ff7f259c103a57504d28f14e30a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ExamModule-ded2ff7f259c103a57504d28f14e30a3"' :
                                        'id="xs-injectables-links-module-ExamModule-ded2ff7f259c103a57504d28f14e30a3"' }>
                                        <li class="link">
                                            <a href="injectables/CreateService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CreateService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ExamService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ExamService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/InsuranceModule.html" data-type="entity-link">InsuranceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-InsuranceModule-eb1eaeb8107c12efb9de876525fd6bb9"' : 'data-target="#xs-controllers-links-module-InsuranceModule-eb1eaeb8107c12efb9de876525fd6bb9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-InsuranceModule-eb1eaeb8107c12efb9de876525fd6bb9"' :
                                            'id="xs-controllers-links-module-InsuranceModule-eb1eaeb8107c12efb9de876525fd6bb9"' }>
                                            <li class="link">
                                                <a href="controllers/InsuranceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InsuranceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-InsuranceModule-eb1eaeb8107c12efb9de876525fd6bb9"' : 'data-target="#xs-injectables-links-module-InsuranceModule-eb1eaeb8107c12efb9de876525fd6bb9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-InsuranceModule-eb1eaeb8107c12efb9de876525fd6bb9"' :
                                        'id="xs-injectables-links-module-InsuranceModule-eb1eaeb8107c12efb9de876525fd6bb9"' }>
                                        <li class="link">
                                            <a href="injectables/InsuranceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>InsuranceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogExamModule.html" data-type="entity-link">LogExamModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LogExamModule-778493d96c4f618751c8a5313f788efe"' : 'data-target="#xs-controllers-links-module-LogExamModule-778493d96c4f618751c8a5313f788efe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LogExamModule-778493d96c4f618751c8a5313f788efe"' :
                                            'id="xs-controllers-links-module-LogExamModule-778493d96c4f618751c8a5313f788efe"' }>
                                            <li class="link">
                                                <a href="controllers/LogExamController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogExamController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LogExamModule-778493d96c4f618751c8a5313f788efe"' : 'data-target="#xs-injectables-links-module-LogExamModule-778493d96c4f618751c8a5313f788efe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LogExamModule-778493d96c4f618751c8a5313f788efe"' :
                                        'id="xs-injectables-links-module-LogExamModule-778493d96c4f618751c8a5313f788efe"' }>
                                        <li class="link">
                                            <a href="injectables/LogExamService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LogExamService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LoginModule-87399244954ff857e814157044d3aaf6"' : 'data-target="#xs-controllers-links-module-LoginModule-87399244954ff857e814157044d3aaf6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LoginModule-87399244954ff857e814157044d3aaf6"' :
                                            'id="xs-controllers-links-module-LoginModule-87399244954ff857e814157044d3aaf6"' }>
                                            <li class="link">
                                                <a href="controllers/LoginController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModule-87399244954ff857e814157044d3aaf6"' : 'data-target="#xs-injectables-links-module-LoginModule-87399244954ff857e814157044d3aaf6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-87399244954ff857e814157044d3aaf6"' :
                                        'id="xs-injectables-links-module-LoginModule-87399244954ff857e814157044d3aaf6"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientModule.html" data-type="entity-link">PatientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PatientModule-6a70db40e38bc33b9211f58eb70c2ad9"' : 'data-target="#xs-controllers-links-module-PatientModule-6a70db40e38bc33b9211f58eb70c2ad9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PatientModule-6a70db40e38bc33b9211f58eb70c2ad9"' :
                                            'id="xs-controllers-links-module-PatientModule-6a70db40e38bc33b9211f58eb70c2ad9"' }>
                                            <li class="link">
                                                <a href="controllers/PatientController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PatientModule-6a70db40e38bc33b9211f58eb70c2ad9"' : 'data-target="#xs-injectables-links-module-PatientModule-6a70db40e38bc33b9211f58eb70c2ad9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PatientModule-6a70db40e38bc33b9211f58eb70c2ad9"' :
                                        'id="xs-injectables-links-module-PatientModule-6a70db40e38bc33b9211f58eb70c2ad9"' }>
                                        <li class="link">
                                            <a href="injectables/PatientService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PatientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlanModule.html" data-type="entity-link">PlanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PlanModule-4c269eb34a6a30cda9d34b1eb4c43265"' : 'data-target="#xs-controllers-links-module-PlanModule-4c269eb34a6a30cda9d34b1eb4c43265"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PlanModule-4c269eb34a6a30cda9d34b1eb4c43265"' :
                                            'id="xs-controllers-links-module-PlanModule-4c269eb34a6a30cda9d34b1eb4c43265"' }>
                                            <li class="link">
                                                <a href="controllers/PlanController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PlanModule-4c269eb34a6a30cda9d34b1eb4c43265"' : 'data-target="#xs-injectables-links-module-PlanModule-4c269eb34a6a30cda9d34b1eb4c43265"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PlanModule-4c269eb34a6a30cda9d34b1eb4c43265"' :
                                        'id="xs-injectables-links-module-PlanModule-4c269eb34a6a30cda9d34b1eb4c43265"' }>
                                        <li class="link">
                                            <a href="injectables/PlanService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PlanService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-ee546eed0272f2533d51d3928006a5cb"' : 'data-target="#xs-controllers-links-module-ProfileModule-ee546eed0272f2533d51d3928006a5cb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-ee546eed0272f2533d51d3928006a5cb"' :
                                            'id="xs-controllers-links-module-ProfileModule-ee546eed0272f2533d51d3928006a5cb"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-ee546eed0272f2533d51d3928006a5cb"' : 'data-target="#xs-injectables-links-module-ProfileModule-ee546eed0272f2533d51d3928006a5cb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-ee546eed0272f2533d51d3928006a5cb"' :
                                        'id="xs-injectables-links-module-ProfileModule-ee546eed0272f2533d51d3928006a5cb"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteModule.html" data-type="entity-link">SiteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SiteModule-a5c404fab3af5cff140713fe298252eb"' : 'data-target="#xs-controllers-links-module-SiteModule-a5c404fab3af5cff140713fe298252eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SiteModule-a5c404fab3af5cff140713fe298252eb"' :
                                            'id="xs-controllers-links-module-SiteModule-a5c404fab3af5cff140713fe298252eb"' }>
                                            <li class="link">
                                                <a href="controllers/SiteController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SiteModule-a5c404fab3af5cff140713fe298252eb"' : 'data-target="#xs-injectables-links-module-SiteModule-a5c404fab3af5cff140713fe298252eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SiteModule-a5c404fab3af5cff140713fe298252eb"' :
                                        'id="xs-injectables-links-module-SiteModule-a5c404fab3af5cff140713fe298252eb"' }>
                                        <li class="link">
                                            <a href="injectables/SiteService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SiteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteNotificationModule.html" data-type="entity-link">SiteNotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SiteNotificationModule-70efadd6c3f0b49ea60714d457d66986"' : 'data-target="#xs-controllers-links-module-SiteNotificationModule-70efadd6c3f0b49ea60714d457d66986"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SiteNotificationModule-70efadd6c3f0b49ea60714d457d66986"' :
                                            'id="xs-controllers-links-module-SiteNotificationModule-70efadd6c3f0b49ea60714d457d66986"' }>
                                            <li class="link">
                                                <a href="controllers/SiteNotificationController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteNotificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SiteNotificationModule-70efadd6c3f0b49ea60714d457d66986"' : 'data-target="#xs-injectables-links-module-SiteNotificationModule-70efadd6c3f0b49ea60714d457d66986"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SiteNotificationModule-70efadd6c3f0b49ea60714d457d66986"' :
                                        'id="xs-injectables-links-module-SiteNotificationModule-70efadd6c3f0b49ea60714d457d66986"' }>
                                        <li class="link">
                                            <a href="injectables/SiteNotificationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SiteNotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SiteRuleModule.html" data-type="entity-link">SiteRuleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SiteRuleModule-8fc5be6677b52dc1b404de3515303c2d"' : 'data-target="#xs-controllers-links-module-SiteRuleModule-8fc5be6677b52dc1b404de3515303c2d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SiteRuleModule-8fc5be6677b52dc1b404de3515303c2d"' :
                                            'id="xs-controllers-links-module-SiteRuleModule-8fc5be6677b52dc1b404de3515303c2d"' }>
                                            <li class="link">
                                                <a href="controllers/SiteRuleController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SiteRuleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SiteRuleModule-8fc5be6677b52dc1b404de3515303c2d"' : 'data-target="#xs-injectables-links-module-SiteRuleModule-8fc5be6677b52dc1b404de3515303c2d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SiteRuleModule-8fc5be6677b52dc1b404de3515303c2d"' :
                                        'id="xs-injectables-links-module-SiteRuleModule-8fc5be6677b52dc1b404de3515303c2d"' }>
                                        <li class="link">
                                            <a href="injectables/SiteRuleService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SiteRuleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserInsuranceModule.html" data-type="entity-link">UserInsuranceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserInsuranceModule-1d51a0c42f0953e4bdc09f08a5c65fdf"' : 'data-target="#xs-controllers-links-module-UserInsuranceModule-1d51a0c42f0953e4bdc09f08a5c65fdf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserInsuranceModule-1d51a0c42f0953e4bdc09f08a5c65fdf"' :
                                            'id="xs-controllers-links-module-UserInsuranceModule-1d51a0c42f0953e4bdc09f08a5c65fdf"' }>
                                            <li class="link">
                                                <a href="controllers/UserInsuranceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserInsuranceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserInsuranceModule-1d51a0c42f0953e4bdc09f08a5c65fdf"' : 'data-target="#xs-injectables-links-module-UserInsuranceModule-1d51a0c42f0953e4bdc09f08a5c65fdf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserInsuranceModule-1d51a0c42f0953e4bdc09f08a5c65fdf"' :
                                        'id="xs-injectables-links-module-UserInsuranceModule-1d51a0c42f0953e4bdc09f08a5c65fdf"' }>
                                        <li class="link">
                                            <a href="injectables/UserInsuranceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserInsuranceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-8aaf49308edad47643bba4324a5a5629"' : 'data-target="#xs-controllers-links-module-UserModule-8aaf49308edad47643bba4324a5a5629"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-8aaf49308edad47643bba4324a5a5629"' :
                                            'id="xs-controllers-links-module-UserModule-8aaf49308edad47643bba4324a5a5629"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-8aaf49308edad47643bba4324a5a5629"' : 'data-target="#xs-injectables-links-module-UserModule-8aaf49308edad47643bba4324a5a5629"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-8aaf49308edad47643bba4324a5a5629"' :
                                        'id="xs-injectables-links-module-UserModule-8aaf49308edad47643bba4324a5a5629"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserSiteModule.html" data-type="entity-link">UserSiteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserSiteModule-7297f0ad57edb796ed14fb21de544764"' : 'data-target="#xs-controllers-links-module-UserSiteModule-7297f0ad57edb796ed14fb21de544764"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserSiteModule-7297f0ad57edb796ed14fb21de544764"' :
                                            'id="xs-controllers-links-module-UserSiteModule-7297f0ad57edb796ed14fb21de544764"' }>
                                            <li class="link">
                                                <a href="controllers/UserSiteController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserSiteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserSiteModule-7297f0ad57edb796ed14fb21de544764"' : 'data-target="#xs-injectables-links-module-UserSiteModule-7297f0ad57edb796ed14fb21de544764"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserSiteModule-7297f0ad57edb796ed14fb21de544764"' :
                                        'id="xs-injectables-links-module-UserSiteModule-7297f0ad57edb796ed14fb21de544764"' }>
                                        <li class="link">
                                            <a href="injectables/UserSiteService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserSiteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link">ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ViewsModule-95b19e067003964ec163c929b5b51cf0"' : 'data-target="#xs-controllers-links-module-ViewsModule-95b19e067003964ec163c929b5b51cf0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ViewsModule-95b19e067003964ec163c929b5b51cf0"' :
                                            'id="xs-controllers-links-module-ViewsModule-95b19e067003964ec163c929b5b51cf0"' }>
                                            <li class="link">
                                                <a href="controllers/ViewsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ViewsModule-95b19e067003964ec163c929b5b51cf0"' : 'data-target="#xs-injectables-links-module-ViewsModule-95b19e067003964ec163c929b5b51cf0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ViewsModule-95b19e067003964ec163c929b5b51cf0"' :
                                        'id="xs-injectables-links-module-ViewsModule-95b19e067003964ec163c929b5b51cf0"' }>
                                        <li class="link">
                                            <a href="injectables/ViewsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ViewsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link">AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DoctorController.html" data-type="entity-link">DoctorController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ExamController.html" data-type="entity-link">ExamController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/InsuranceController.html" data-type="entity-link">InsuranceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LogExamController.html" data-type="entity-link">LogExamController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoginController.html" data-type="entity-link">LoginController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PatientController.html" data-type="entity-link">PatientController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PlanController.html" data-type="entity-link">PlanController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProfileController.html" data-type="entity-link">ProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SiteController.html" data-type="entity-link">SiteController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SiteNotificationController.html" data-type="entity-link">SiteNotificationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SiteRuleController.html" data-type="entity-link">SiteRuleController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link">UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserInsuranceController.html" data-type="entity-link">UserInsuranceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserSiteController.html" data-type="entity-link">UserSiteController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ViewsController.html" data-type="entity-link">ViewsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateDoctorDto.html" data-type="entity-link">CreateDoctorDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateExamDto.html" data-type="entity-link">CreateExamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFilterDto.html" data-type="entity-link">CreateFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateInsuranceDto.html" data-type="entity-link">CreateInsuranceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLogExamDto.html" data-type="entity-link">CreateLogExamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLoginDto.html" data-type="entity-link">CreateLoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePatientDto.html" data-type="entity-link">CreatePatientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePlanDto.html" data-type="entity-link">CreatePlanDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProfileDto.html" data-type="entity-link">CreateProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSiteDto.html" data-type="entity-link">CreateSiteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSiteNotificationDto.html" data-type="entity-link">CreateSiteNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSiteRuleDto.html" data-type="entity-link">CreateSiteRuleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserInsuranceDto.html" data-type="entity-link">CreateUserInsuranceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserSiteDto.html" data-type="entity-link">CreateUserSiteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateViewsDto.html" data-type="entity-link">CreateViewsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Doctor.html" data-type="entity-link">Doctor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Exam.html" data-type="entity-link">Exam</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpErrorFilter.html" data-type="entity-link">HttpErrorFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Insurance.html" data-type="entity-link">Insurance</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogExam.html" data-type="entity-link">LogExam</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link">Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patient.html" data-type="entity-link">Patient</a>
                            </li>
                            <li class="link">
                                <a href="classes/Plan.html" data-type="entity-link">Plan</a>
                            </li>
                            <li class="link">
                                <a href="classes/Profile.html" data-type="entity-link">Profile</a>
                            </li>
                            <li class="link">
                                <a href="classes/Site.html" data-type="entity-link">Site</a>
                            </li>
                            <li class="link">
                                <a href="classes/SiteNotification.html" data-type="entity-link">SiteNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/SiteRule.html" data-type="entity-link">SiteRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserInsurance.html" data-type="entity-link">UserInsurance</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserSite.html" data-type="entity-link">UserSite</a>
                            </li>
                            <li class="link">
                                <a href="classes/Views.html" data-type="entity-link">Views</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthMiddleware.html" data-type="entity-link">AuthMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateService.html" data-type="entity-link">CreateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DoctorService.html" data-type="entity-link">DoctorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExamService.html" data-type="entity-link">ExamService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InsuranceService.html" data-type="entity-link">InsuranceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogExamService.html" data-type="entity-link">LogExamService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerInterceptor.html" data-type="entity-link">LoggerInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatientService.html" data-type="entity-link">PatientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlanService.html" data-type="entity-link">PlanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link">ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SiteNotificationService.html" data-type="entity-link">SiteNotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SiteRuleService.html" data-type="entity-link">SiteRuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SiteService.html" data-type="entity-link">SiteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserInsuranceService.html" data-type="entity-link">UserInsuranceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserSiteService.html" data-type="entity-link">UserSiteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ViewsService.html" data-type="entity-link">ViewsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});