
import { LibraryContext } from '@/Context/libraryContext';
import React, { useContext } from 'react';
import { TLibrary } from '../DataTypes/Type';


import PlanSaveCard from '../components/shared/PlanSaveCard';
import PlanCard from '../components/shared/PlanCard';


const MyPlanPage = () => {
    const { libraryPlan, librarySaved } = useContext(LibraryContext)

    return (
        <div>
            my plan MyPlanPage

            {libraryPlan.length} <br />
            my saved {librarySaved.length}


            <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Today’s Plan" />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        
                    {
                        libraryPlan.length>0? libraryPlan.map((plan:TLibrary)=>{
                           return <PlanCard key={plan.id} data={plan} ></PlanCard>
                        }):(
                            <p>No Added Plan</p>
                        )
                    }
                        
                    </div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        
                        
                        {
                        librarySaved.length>0? librarySaved.map((plan:TLibrary)=>{
                           return <PlanSaveCard key={plan.id} data={plan} ></PlanSaveCard>
                        }):(
                            <p>No Saved</p>
                        )
                    }  
                        </div>

                    
                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;